import express from "express";
import { getProducts, getProduct, getEvents, getEvent, getShirts, getShirt, createProduct } from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProduct);

router.get("/events", getEvents);
router.get("/events/:id", getEvent);

router.get("/shirts", getShirts);
router.get("/shirts/:id", getShirt);

router.post("/", createProduct);

export default router;