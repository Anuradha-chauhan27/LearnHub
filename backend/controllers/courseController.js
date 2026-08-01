import { Course } from "../models/courses.js";
export const getAllCourses = async (req, res) => {
    try {
        const data = await Course.find();

        res.status(200).json({
            success: true,
            data,
        })

    }
    catch (error) {
        res.status(500).json({
            success: false,
            messsage: error.message
        })
    }
}

export const getCoursesById = async (req, res) => {
    try {
        const course = await Course.findById(req.params.id);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not Found"
            })
        }
        res.status(200).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const addCourse = async (req, res) => {
    try {
        const { title, description, price, oldPrice, rating, duration,
            lessons, projects, instructor, covers, includes } = req.body;

        const images = req.files.images.map((file) => {
            `http://localhost:5000/uploads/images/${file.filename}`
        })
        const image = images[0];

        const videos = req.files.videos.map((file, index) => ({
            title: `Lesson ${index + 1}`,
            url: `http://localhost:5000/uploads/videos/${file.filename}`,
            desc: "",
        }));

        const course = await Course.create({
            title, image, images, description, price, oldPrice, rating,
            duration, lessons, projects, instructor, covers, includes, videos,
        });

        res.status(201).json({
            success: true,
            course,
        });
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}