import express from "express";
import { enrollCourse, getMyCourses } from "../controllers/enrollmentController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/mycourses", protect, getMyCourses);
router.post("/enroll", protect, enrollCourse);

export default router;