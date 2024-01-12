import { createConnection, Connection } from "mysql2/promise";
import { dbConfig } from "./dbConfig";

let connection: Connection | null = null;

const connectDB = async () => {
  try {
    connection = await createConnection(dbConfig);
    console.log("Conexión a la base de datos establecida");
  } catch (error) {
    console.error("Error al conectar a la base de datos:", error);
  }
};

export { connectDB, connection };
