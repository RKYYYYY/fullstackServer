import express, { Router } from "express";
import { getBlogs } from "../controllers/blog.controller.js";
const router = express.Router();

router.get("/", getBlogs);

export default router;

// sur http://localhost:3000/blog
