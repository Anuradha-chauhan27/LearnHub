import { Course } from "../models/courses.js";
import { User } from "../models/user.js";

export const createCourse = async (req, res) => {
  try {
    const {title,image,images,description,price,oldPrice,discount,rating,reviews,students,duration,lessons,projects,
      instructor,certificate,lifetimeAccess,videos,covers,includes,} = req.body;

    // Instructor validation
    const instructorUser = await User.findById(instructor);

    if (!instructorUser || instructorUser.role !== "instructor") {
      return res.status(400).json({
        success: false,
        message: "Invalid instructor",
      });
    }

    const course = await Course.create({
      title,
      image,
      images,
      description,
      price,
      oldPrice,
      discount,
      rating,
      reviews,
      students,
      duration,
      lessons,
      projects,
      instructor,
      certificate,
      lifetimeAccess,
      videos,
      covers,
      includes,
    });

    res.status(201).json({
      success: true,
      message: "Course created successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find()
      .populate("instructor", "name email");

    res.json({
      success: true,
      courses,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getCourseById = async (req, res) => {
  try {
    const course = await Course.findById(req.params.id)
      .populate("instructor", "name email");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const updateCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    ).populate("instructor", "name email");

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      message: "Course updated successfully",
      course,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const deleteCourse = async (req, res) => {
  try {
    const course = await Course.findByIdAndDelete(req.params.id);

    if (!course) {
      return res.status(404).json({
        success: false,
        message: "Course not found",
      });
    }

    res.json({
      success: true,
      message: "Course deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

