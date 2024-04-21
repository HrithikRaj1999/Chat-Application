import express from "express";
import requireAuth from "../middleware/requireAuth.js";
import { getUsersForSidebar } from "../controllers/user.controller.js";

const router = express.Router();

router.get("/", requireAuth, getUsersForSidebar);
// router.get("/get-img",getImg)
export default router;
