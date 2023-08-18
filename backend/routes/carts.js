import express from "express";
import { getCarts } from "../controllers/cart.js";

const router = express.Router();

router.get("/", getCarts);

export default router;