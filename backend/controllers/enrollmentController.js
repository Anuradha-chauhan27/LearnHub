import { Enrollment } from "../models/enrollment.js";
import { Course } from "../models/courses.js";
import { Notification } from "../models/notification.js";

export const enrollCourse = async (req, res) => {
    try {
        const { courseId } = req.body;
        const studentId = req.user.id

        const course = await Course.findById(courseId);

        if (!course) {
            return res.status(404).json({
                success: false,
                message: "Course not found"
            })
        }

        const alreadyEnroll = await Enrollment.findOne({
            student: studentId,
            course: courseId
        })

        if (alreadyEnroll) {
            return res.status(400).json({
                success: false,
                message: "You are Already Enrolled in this Course "
            })
        }

        const enrollment = await Enrollment.create({
            student: studentId,
            course: courseId,
        })
        await Notification.create({
            user: studentId,
            title: "Course Enrolled 📚",
            message: `You have successfully enrolled in ${course.title}`,
            type: "enroll",
        });
        return res.status(201).json({
            success: true,
            message: "Successfully Enrolled",
            enrollment: enrollment,
        })


    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const getMyCourses = async (req, res) => {
    try {
        const userId = req.user.id;

        const myCourses = await Enrollment.find({
            student: userId
        }).populate("course");

        return res.status(200).json({
            success: true,
            totalCourse: myCourses.length,
            myCourses
        })

    }
    catch (error) {
        return res.status(500).json({
            success: false,
            message: error.message
        })
    }
}