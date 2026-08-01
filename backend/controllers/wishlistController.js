import { Wishlists } from "../models/wishList.js";

export const addToWishlist = async (req, res) => {
  try {
    const { courseId } = req.body;

    const exists = await Wishlists.findOne({
      student: req.user.id,
      course: courseId,
    });

    if (exists) {
      return res.status(400).json({
        success: false,
        message: "Already in wishlist",
      });
    }

    const wishlist = await Wishlists.create({
      student: req.user.id,
      course: courseId,
    });

    res.status(201).json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getWishlist = async (req, res) => {
  try {
    const wishlist = await Wishlists.find({
      student: req.user.id,
    }).populate("course");

    res.json({
      success: true,
      wishlist,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const removeWishlist = async (req, res) => {
  try {
    await Wishlists.findByIdAndDelete(req.params.id);

    res.json({
      success: true,
      message: "Removed",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};