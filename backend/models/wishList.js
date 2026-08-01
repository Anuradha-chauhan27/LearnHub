import mongoose from 'mongoose'

const wishLists = new mongoose.Schema( {
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
  },
  {
    timestamps: true,
  })

  wishLists.index({ student: 1, course: 1 }, { unique: true });


export const Wishlists = mongoose.model('Wishlists',wishLists) 