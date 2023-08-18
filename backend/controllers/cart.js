import { db } from "../db.js";

export const getCarts = (_, res) => {
    const q = "SELECT * FROM cart";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};