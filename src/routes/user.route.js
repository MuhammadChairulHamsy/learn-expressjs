import express from "express";
import { getUser, getUserById, insertUser, updateUser, deleteUser } from "../controllers/user.controller.js";

const router = express.Router();


router.get("/", getUser);
router.get("/user/:id", getUserById);
router.post("/", insertUser)
router.put("/:id", updateUser);
router.delete("/:id", deleteUser);

export default router;
