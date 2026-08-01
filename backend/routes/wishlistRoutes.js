import express from "express";

import {addToWishlist,getWishlist, removeWishlist,} from "../controllers/wishlistController.js";

import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/add", protect, addToWishlist);

router.get("/", protect, getWishlist);

router.delete("/:id", protect, removeWishlist);

export default router;