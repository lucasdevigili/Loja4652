import { db } from "../db.js";

export const getProducts = (_, res) => {
    const q = "SELECT * FROM product";

    db.query(q, (err, products) => {
        if (err) return res.status(500).json({ error: "Database error" });

        return res.status(200).json(products);
    });
};

export const getProduct = (req, res) => {
    const productId = req.params.id;
    const q = "SELECT * FROM product WHERE id = ?";
    
    db.query(q, [productId], (err, products) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (products.length === 0) {
            return res.status(404).json({ error: "Product not found" });
        }

        const product = products[0];

        if (product.category === "camisa") {
            const qcamisa = "SELECT * FROM shirt_stock WHERE product_id = ?";
            
            db.query(qcamisa, [productId], (err, camisa) => {
                if (err) return res.status(500).json({ error: "Database error" });

                product.camisa = camisa;
                return res.status(200).json(product);
            });
        } else if (product.category === "evento") {
    const qEventos = "SELECT * FROM event_stock WHERE product_id = ?";
    
    db.query(qEventos, [productId], (err, eventos) => {
        if (err) return res.status(500).json({ error: "Database error" });

        product.eventos = eventos;
        return res.status(200).json(product);
    });
} else {
            return res.status(200).json(product);
        }
    });
};


export const createProduct = (req, res) => {
    const product = req.body;

    // Assuming the `category` property determines whether it's "camisa" or "evento"
    const qProduct = "INSERT INTO product (`name`, `description`, `oldPrice`, `price`, `productPic`, `discount`, `category`) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(qProduct, [
        product.name,
        product.description,
        product.oldPrice,
        product.price,
        product.productPic,
        product.discount,
        product.category
    ], (err, result) => {
        if (err) return res.status(500).json({ error: "Database error" });

        const productId = result.insertId;

        if (product.category === "camisa") {
            const qcamisa = "INSERT INTO shirt_stock (`product_id`, `size`, `amount`) VALUES (?, ?, ?)";

            db.query(qcamisa, [productId, product.size, product.amount], (err) => {
                if (err) return res.status(500).json({ error: "Database error" });

                return res.status(201).json({ message: "Product created successfully" });
            });
        } else if (product.category === "evento") {
            const qEventos = "INSERT INTO event_stock (`product_id`, `date`, `vagas`) VALUES (?, ?, ?)";

            db.query(qEventos, [productId, product.date, product.vagas], (err) => {
                if (err) return res.status(500).json({ error: "Database error" });

                return res.status(201).json({ message: "Product created successfully" });
            });
        } else {
            return res.status(201).json({ message: "Product created successfully" });
        }
    });
};