import express, { Router } from "express";
import {
  register,
  login,
  verifyMail,
  currentUser,
  logoutUser,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", register);
router.post("/login", login);

router.get("/verifyMail/:token", verifyMail);

router.get("/current", currentUser);

router.delete("/deleteToken", logoutUser);

export default router;
