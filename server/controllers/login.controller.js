import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { User } from "../models/user.js";

export const loginUsuario = async (req, res) => {

    const { email, password } = req.body;

    try {

        //Verifico que existe el usuario en la BD, sino vuelve.
        let user = await User.findOne({ email });
        if (!user)
            return res.json({
                status: "NOT OK",
                msg: "Credenciales invalidas"
            });

        //Verifico que el password ingresado sea el mismo que el de la BD, sino vuelve.
        const passwordValido = bcryptjs.compareSync(password, user.password);
        if (!passwordValido)
            return res.json({
                status: "NOT OK",
                msg: "Correo o Contraseña Invalida"
            });

        const payload = {
            id: user.id,
            userName: user.userName,
            email: user.email,
            admin: user.admin
        }
        jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: 300 }, (error, token) => {
            res.json({
                status: "OK",
                id: user.id,
                userName: user.userName,
                msg: "Usuario Autenticado",
                token
            })
        });

    } catch (error) {
        console.log(error);
        res.json({
            status: "NOT OK",
            msg: "Error al loguear"
        });
    }
}