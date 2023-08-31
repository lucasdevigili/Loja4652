
import express from "express";
import { getUsers, getUserByEmail, addUser } from "../controllers/user.js";

const router = express.Router();

router.get("/", getUsers);

router.get("/:email", getUserByEmail);

router.post("/", addUser);

export default router;