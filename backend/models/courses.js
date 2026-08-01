import mongoose from "mongoose";

const videoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
});

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    images: [
      {
        type: String,
      },
    ],

    description: {
      type: String,
      required: true,
    },

    price: {
      type: Number,
      default: 0,
    },

    oldPrice: {
      type: Number,
      default: 0,
    },

    discount: {
      type: String,
      default: "",
    },

    rating: {
      type: Number,
      default: 5,
    },

    reviews: {
      type: Number,
      default: 0,
    },

    students: {
      type: Number,
      default: 0,
    },

    duration: {
      type: String,
      default: "",
    },

    lessons: {
      type: Number,
      default: 0,
    },

    projects: {
      type: Number,
      default: 0,
    },

    instructor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    },
    certificate: {
      type: Boolean,
      default: true,
    },

    lifetimeAccess: {
      type: Boolean,
      default: true,
    },

    videos: [videoSchema],
    covers: [
      {
        type: String,
      },
    ],

    includes: [
      {
        type: String,
      },
    ],
  },

  {
    timestamps: true,
  }
);

export const Course = mongoose.model("Course", courseSchema);