import express, { Request, Response } from "express";
import { connectDB } from "./db";
import { getAllProducts } from "./products";
import dotenv from "dotenv";
import { productRouter } from "./products/routes";

dotenv.config(); // Carga las variables de entorno de .env
const app = express();
const port = process.env.PORT || 3000;

// Conecta a la base de datos
connectDB();

app.get("/", (req: Request, res: Response) => {
  res.send("¡Hola mundo!");
});

//app.get("/api/productos", async (req, res) => await getAllProducts(req, res));
app.use("/product", productRouter);
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
