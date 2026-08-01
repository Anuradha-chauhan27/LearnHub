import { User } from "../models/user.js";
import { Course } from "../models/courses.js";
import { Enrollment } from "../models/enrollment.js";
import bcrypt from "bcryptjs";

export const getDashboard = async (req, res) => {
  try {

    const students = await User.countDocuments({ role: "student" });

    const instructors = await User.countDocuments({ role: "instructor" });

    const courses = await Course.countDocuments();

    const enrollments = await Enrollment.countDocuments();

    res.json({
      success: true,
      students,
      instructors,
      courses,
      enrollments,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }
};

export const getAllStudents = async (req, res) => {

  const students = await User.find({
    role: "student",
  }).select("-password");

  res.json({
    success: true,
    students,
  });

};

export const getAllInstructors = async (req, res) => {
  const instructors = await User.find({
    role: "instructor",
  }).select("-password");

  res.json({
    success: true,
    instructors,
  });
};

export const createInstructor = async (req, res) => {
  const { name, email, password } = req.body;

  const exist = await User.findOne({ email });

  if (exist) {
    return res.status(400).json({
      success: false,
      message: "Email already exists",
    });
  }

  const hash = await bcrypt.hash(password, 10);

  const instructor = await User.create({
    name,
    email,
    password: hash,
    role: "instructor",
  });

  res.status(201).json({
    success: true,
    instructor,
  });
};


export const deleteUser = async (req, res) => {

  await User.findByIdAndDelete(req.params.id);

  res.json({
    success: true,
    message: "User Deleted",
  });

}



