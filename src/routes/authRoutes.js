import express from "express";
import { login, updateLogin } from "../controllers/authController.js";

const router = express.Router();

router.post("/login", login);
router.put("/login", updateLogin);

export default router;