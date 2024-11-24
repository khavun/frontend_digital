import mysql, { Pool } from 'mysql2/promise';

// Create a connection pool using environment variables
const pool: Pool = mysql.createPool({
  host: process.env.DB_HOST, // 'localhost'
  user: process.env.DB_USERNAME, // 'root'
  password: process.env.DB_PASSWORD, // 'admin'
  database: process.env.DB_DATABASE, // 'buratino'
  port: Number(process.env.DB_PORT), // 3307
});

export default pool;
