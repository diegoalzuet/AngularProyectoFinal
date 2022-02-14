import express from "express";
import 'dotenv/config'
import { authRouter } from "./routes/auth.js";
import { cartRouter } from "./routes/cartRouter.js";
import { connectDB } from "./db/config.js";
import cors from "cors";

const app = express();

// app.use("/", express.static(__dirname + "/public"));

connectDB();

//PARA LEER EL JSON DEL CUERPO DE UNA PETICION EN LUGAR DE BODY-PARSER
app.use(express.json())
app.use(cors());
app.use("/auth", authRouter);
app.use("/cart", cartRouter);

app.listen(process.env.PORT, () => {
    console.log(`Servidor corriendo en el puerto ${process.env.PORT}`);
})