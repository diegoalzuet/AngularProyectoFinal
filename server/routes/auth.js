import { Router } from "express";
import { loginUsuario } from "../controllers/login.controller.js";
import { registerUser } from "../controllers/register.controller.js";

export const authRouter = Router();

// authRouter.get("/login", (req,res) => {
//     res.send("AUTH SERVER")
// })
authRouter.post("/login", loginUsuario);
authRouter.post("/register", registerUser);