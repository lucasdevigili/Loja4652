import { db } from "../db.js";

export const getProducts = (_, res) => {
    const q = "SELECT * FROM product";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const getProduct = (req, res) => {
    const q = "SELECT * FROM product WHERE id = ?";
    const productId = req.params.id; 
    db.query(q, [productId], (err, data) => {
        if (err) return res.json(err);

        if (data.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        return res.status(200).json(data[0]);
    });
};