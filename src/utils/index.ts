import { connection } from "../db";

export const getPaginatedAll = async ({
  page = 1,
  pageSize = 10,
  table,
}: {
  page?: number;
  pageSize?: number;
  table: string;
}) => {
  try {
    if (!connection) {
      throw new Error("La conexión a la base de datos no está establecida");
    }

    const [totalRows] = await connection.execute(
      `SELECT COUNT(*) as total FROM ${table}`
    );

    //@ts-ignore
    const totalProducts = (totalRows[0] as any).total;

    const offset = (page - 1) * pageSize;

    const [rows] = await connection.execute(
      `SELECT * FROM ${table} LIMIT ?, ?`,
      [offset, pageSize]
    );

    const totalPages = Math.ceil(totalProducts / pageSize);

    return {
      totalPages,
      currentPage: page,
      products: rows,
    };
  } catch (error) {
    console.error("Error al obtener productos:", error);
    return "ERROR";
  }
};
