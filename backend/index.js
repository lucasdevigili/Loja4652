import express from "express";
import userRoutes from "./routes/users.js";
import productsRoutes from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/", userRoutes)
app.use("/prduct", productsRoutes)

app.listen(8800)