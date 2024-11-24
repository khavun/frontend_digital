import { NextApiRequest, NextApiResponse } from 'next';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import db from '@/app/lib/db'; // Assuming you have a db.js for DB connection

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret'; // Make sure to set this in your .env file

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { email, password } = req.body;

    try {
      // Query the database to find the user
      const [rows]: any = await db.query('SELECT * FROM users WHERE email = ?', [email]);

      if (rows.length === 0) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      const user = rows[0];

      // Compare the password with the hashed password in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(401).json({ message: 'Invalid credentials' });
      }

      // Generate a JWT token
      const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' });

      // Set the token in a cookie
      res.setHeader(
        'Set-Cookie',
        `token=${token}; HttpOnly; Path=/; Max-Age=3600; SameSite=Strict`
      );

      return res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: 'Something went wrong', error });
    }
  }

  res.setHeader('Allow', ['POST']);
  res.status(405).json({ message: `Method ${req.method} not allowed` });
}
