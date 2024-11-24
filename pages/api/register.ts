import type { NextApiRequest, NextApiResponse } from "next";
import bcrypt from "bcrypt";
import db from '@/app/lib/db';

const saltRounds = 10; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: "Email and password are required" });
    }

    try {

      const [rows]: any = await db.query("SELECT * FROM users WHERE email = ?", [email]);
      if (rows.length > 0) {
        return res.status(409).json({ message: "Email already exists" });
      }

      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const [result]: any = await db.query(
        "INSERT INTO users (email, password) VALUES (?, ?)",
        [email, hashedPassword]
      );

      const insertId = result.insertId;

      return res.status(201).json({
        message: "User created successfully",
        userId: insertId, 
      });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Something went wrong", error });
    }
  }

  res.setHeader("Allow", ["POST"]);
  res.status(405).json({ message: `Method ${req.method} Not Allowed` });
}
