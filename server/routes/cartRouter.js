import { Router } from "express";
import { addToCart, deleteAll, getCart, removeFromCart } from "../controllers/cart.controller.js";

export const cartRouter = Router();

cartRouter.get("", getCart);
cartRouter.post("",addToCart);
cartRouter.delete("",removeFromCart);
cartRouter.delete("/deleteAll",deleteAll);