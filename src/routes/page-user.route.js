import express from "express";
import { getUserPage } from "../controllers/page-user.controller.js";

const router = express.Router();

router.get("/", getUserPage);
router.get("/user", getUserPage);


export default router;