import { interverntion } from "../middlewares/interverntion";
import productsRouter from "./products";
import express from "express";

const router = express.Router();
router.use(interverntion);
router.use("/products", productsRouter);
router.get("/", (req, res) => {
 res.status(200).json({ message: "Hello World" });
});

export default router;
