import { db } from "../db.js";

export const getProducts = (_, res) => {
    const q = "SELECT * FROM product";

    db.query(q, (err, products) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (products.length === 0) {
            return res.status(404).json({ error: "No products found" });
        }
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
        return res.status(200).json(products[0]);
    });
};

export const getEvents = (_, res) => {
    const q = "SELECT * FROM event_stock";

    db.query(q, (err, events) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (events.length === 0) {
            return res.status(404).json({ error: "No events found" });
        }

        return res.status(200).json(events);
    });
};

export const getEvent = (req, res) => {
    const eventId = req.params.id;
    const q = "SELECT * FROM event_stock WHERE eventId = ?";

    db.query(q, [eventId], (err, event) => {
        if (err) return res.status(500).json({ error: "Database error" });

        if (event.length === 0) {
            return res.status(404).json({ error: "Event not found" });
        }

        return res.status(200).json(event[0]);
    });
};

export const getShirts = (_, res) => {
    const q = "SELECT * FROM shirt_stock";

    db.query(q, (err, shirt) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (shirt.length === 0) {
            return res.status(404).json({ error: "No shirt found" });
        }
        return res.status(200).json(shirt);
    });
};

export const getShirt = (req, res) => {
    const shirtId = req.params.id;
    const q = "SELECT * FROM shirt_stock WHERE shirtId = ?";

    db.query(q, [shirtId], (err, shirts) => {
        if (err) return res.status(500).json({ error: "Database error" });
        if (shirts.length === 0) {
            return res.status(404).json({ error: "Shirt not found" });
        }
        return res.status(200).json(shirts);
    });
};


export const createProduct = (req, res) => {
    const product = req.body;
    const qProduct = "INSERT INTO product (`name`, `description`, `oldPrice`, `price`, `productPic`, `discount`, `category`) VALUES (?, ?, ?, ?, ?, ?, ?)";

    db.query(qProduct, [
        product.name,
        product.description,
        product.oldPrice,
        product.price,
        product.productPic,
        product.discount,
        product.category
    ], (err) => {
        if (err) return res.status(500).json({ error: "Database error" });

        return res.status(201).json({ message: "Product created successfully" });
    });
};
