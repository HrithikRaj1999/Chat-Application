import express from "express";
import { getMessages, sendMessage } from "../controllers/message.controller.js";
import requireAuth from "../middleware/requireAuth.js";

const router = express.Router();

router.get("/:id", requireAuth, getMessages);
router.post("/send/:id", requireAuth, sendMessage);

export default router;
