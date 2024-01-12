import { connection } from "../db";
import { getPaginatedAll } from "../utils";

const PRODUCT_TABLE = "producto";

export const getAllProducts = async (req: any, res: any) => {
  const response = await getPaginatedAll({
    page: parseInt(req.query.page as string),
    pageSize: parseInt(req.query.pageSize as string),
    table: PRODUCT_TABLE,
  });
  if (response !== "ERROR") {
    return res.status(200).json(response);
  } else {
    console.log("Error en la petición");
    return res.status(500).send("Server error");
  }
  // try {
  //   if (!connection) {
  //     throw new Error("La conexión a la base de datos no está establecida");
  //   }

  //   const page = parseInt(req.query.page as string) || 1;
  //   const pageSize = parseInt(req.query.pageSize as string) || 10;

  //   const [totalRows] = await connection.execute(
  //     `SELECT COUNT(*) as total FROM ${PRODUCT_TABLE}`
  //   );

  //   //@ts-ignore
  //   const totalProducts = (totalRows[0] as any).total;

  //   const offset = (page - 1) * pageSize;

  //   const [rows] = await connection.execute(
  //     `SELECT * FROM ${PRODUCT_TABLE} LIMIT ?, ?`,
  //     [offset, pageSize]
  //   );

  //   const totalPages = Math.ceil(totalProducts / pageSize);

  //   res.json({
  //     totalPages,
  //     currentPage: page,
  //     products: rows,
  //   });
  // } catch (error) {
  //   console.error("Error al obtener productos:", error);
  //   res.status(500).send("Error interno del servidor");
  // }
};

export const getProductById = async (req: any, res: any) => {
  try {
    if (!connection) {
      throw new Error("La conexión a la base de datos no está establecida");
    }
    const id = req.params.id;
    const [row] = await connection.execute(
      `SELECT * FROM ${PRODUCT_TABLE} WHERE referencia = ${id}`
    );
    res.json(row);
  } catch {
    return res.status(404).send("no se encontro el producto");
  }
};
