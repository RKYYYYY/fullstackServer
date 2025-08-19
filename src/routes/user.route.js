import express, { Router } from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.status(200).json("TEST USER");
});

export default router;
