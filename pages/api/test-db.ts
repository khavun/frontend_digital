import { NextApiRequest, NextApiResponse } from 'next';
import pool from '@/app/lib/db'; // Import the connection pool

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM users');
    res.status(200).json({
      success: true,
      data: rows,
    });
  } catch (error: any) {
    console.error('Database query error:', error.message);
    res.status(500).json({
      success: false,
      message: 'Database connection failed',
      error: error.message,
    });
  }
};

export default handler;
