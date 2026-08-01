import { getAllCourses,getCoursesById,addCourse } from "../controllers/courseController.js";
import { upload } from "../middleware/uploads.js";
import { protect } from "../middleware/authMiddleware.js";
import express from 'express'
const router = express.Router()

router.get('/',getAllCourses)
router.get('/:id',getCoursesById)
router.post(
  "/add-course",
  protect,
  upload.fields([
    { name: "images", maxCount: 10 },
    { name: "videos", maxCount: 20 }
  ]),
  addCourse
);

export default router;