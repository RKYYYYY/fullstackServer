import express, { Router } from "express";
import { register } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);

export default router;
