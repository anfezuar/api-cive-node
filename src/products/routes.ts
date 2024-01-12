import express from "express";
import { getAllProducts, getProductById } from ".";

export const productRouter = express.Router();

productRouter.get("/", getAllProducts);

productRouter.get("/:id", getProductById);
