import express from "express";
//import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

//app.use("/", userRoutes)
app.use("/products", productRoutes)

app.listen(8800)