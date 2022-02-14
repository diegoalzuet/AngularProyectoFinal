import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";


export const registerUser = async (req, res) => {

    const { email, password, userName, admin } = req.body;

    try {

        if (await User.findOne({ email }))
            return res.json({
                status: "NOT OK",
                msg: "El correo ya se encuentra registrado"
            });

        const usuario = new User({ email, password, userName , admin });

        //ENCRIPTAR PASSWORD
        const salt = bcryptjs.genSaltSync(5);
        usuario.password = bcryptjs.hashSync(password, salt);

        usuario.save();

        const payload = {
            id: usuario.id
        }

        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 300 }, (error, token) => {

            res.json({
                status: "OK",
                id: usuario.id,
                userName,
                token,
                msg: "Usuario Registrado Exitosamente"
            });
        })


    } catch (error) {
        console.log(error);
        res.json({
            status: "NOT OK",
            msg: "Error al registrar"
        });

    }
}