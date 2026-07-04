import express from "express";
import { googleAuth } from "../controllers/auth_controller.js";
import { logout } from "../controllers/auth_controller.js";

const authRouter = express.Router();

authRouter.post("/google", googleAuth);
authRouter.post("/logout", logout);

export default authRouter;
