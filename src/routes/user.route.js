import express, { Router } from "express";
import { register, login, verifyMail } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

export default router;
