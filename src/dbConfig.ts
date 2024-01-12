import dotenv from "dotenv";

dotenv.config(); // Carga las variables de entorno de .env

export const dbConfig = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
};
