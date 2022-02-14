import { Router } from "express";
import { getAll, loginUsuario } from "../controllers/login.controller.js";
import { registerUser } from "../controllers/register.controller.js";

export const authRouter = Router();

// authRouter.get("/login", (req,res) => {
//     res.send("AUTH SERVER")
// })
authRouter.post("/login", loginUsuario);
authRouter.get("/login/admin", getAll);
authRouter.post("/register", registerUser);