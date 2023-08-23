import { db } from "../db.js";

export const getUsers = (_, res) => {
    const q = "SELECT * FROM user";

    db.query(q, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json(data);
    });
};

export const addUser = (req, res) => {
    const q = "INSERT INTO user (`name`, `cpf`, `user_data`, `email`, `cellphone`, `password`) VALUES (?,?,?,?,?,?)";
    const values = [
        req.body.name,
        req.body.cpf,
        req.body.user_data,
        req.body.email,
        req.body.cellphone,
        req.body.password
    ];

    db.query(q, values, (err) => {
        if (err) return res.json(err);

        return res.status(200).json({
            message: "Usuário cadastrado com sucesso!"
        });
    });
};





