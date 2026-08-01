import express from "express";
import {getDashboard,getAllStudents,getAllInstructors,createInstructor,deleteUser,} from "../controllers/adminController.js";
import {createCourse,getAllCourses, getCourseById, updateCourse,deleteCourse,} from "../controllers/adminCourseController.js";
import { protect } from "../middleware/authMiddleware.js";
import { adminOnly } from "../middleware/adminMiddleware.js";

const router = express.Router();

router.get("/dashboard", protect, adminOnly, getDashboard);

router.get("/students", protect, adminOnly, getAllStudents);

router.get("/instructor", protect, adminOnly, getAllInstructors);

router.post("/instructor", protect, adminOnly, createInstructor);

router.delete("/user/:id", protect, adminOnly, deleteUser);



router.post("/courses", protect, adminOnly, createCourse);

router.get("/courses", protect, adminOnly, getAllCourses);

router.get("/courses/:id", protect, adminOnly, getCourseById);

router.put("/courses/:id", protect, adminOnly, updateCourse);

router.delete("/courses/:id", protect, adminOnly, deleteCourse);


export default router;