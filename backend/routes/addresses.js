import express from "express";
import { getAddresses } from "../controllers/address.js";

const router = express.Router();

router.get("/", getAddresses);

export default router;