import express from "express";
import userRoutes from "./routes/users.js";
import productRoutes from "./routes/products.js";
import cartRoutes from "./routes/carts.js";
import addressRoutes from "./routes/addresses.js";

import cors from "cors";

const app = express();

app.use(express.json())
app.use(cors())

app.use("/users", userRoutes)
app.use("/products", productRoutes)
app.use("/carts", cartRoutes)
app.use("/addresses", addressRoutes)

app.listen(8800)