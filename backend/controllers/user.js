    import { db } from "../db.js";

    export const getUsers = (_, res) => {
        const q = "SELECT * FROM user";

        db.query(q, (err, data) => {
            if (err) return res.json(err);

            return res.status(200).json(data);
        });
    };

    export const getUserByEmail = (req, res) => {
        const email = req.params.email;
        const q = "SELECT email, password FROM user WHERE email = ?";
    
        db.query(q, [email], (err, userData) => {
            if (err) return res.status(500).json({ error: "Database error" });
            if (userData.length === 0) {
                return res.status(404).json({ error: "User not found" });
            }
            return res.status(200).json(userData);
        });
    };

    export const addUser = (req, res) => {
        const user = req.body
        const q = "INSERT INTO user (`name`, `cpf`, `user_data`, `email`, `cellphone`, `password`, `terms`) VALUES (?,?,?,?,?,?,?)";
        const values = [
            user.name,
            user.cpf,
            user.user_data,
            user.email,
            user.cellphone,
            user.password,
            user.terms
        ];

        try {
            db.query(q, values, (err) => {
                if (err) {
                    console.error("Error inserting user:", err);
                    return res.status(500).json({ error: "Internal Server Error" });
                }

                return res.status(200).json({
                    message: "Usuário cadastrado com sucesso!"
                });
            });
        } catch (error) {
            console.error("Error in try-catch:", error);
            return res.status(500).json({ error: "Internal Server Error" });
        }
    };