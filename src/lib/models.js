import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      max: 50,
    },
    password: {
      type: String,
      required: true,
      min: 6,
    },
    img: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const postSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    desc: {
      type: String,
      required: true,
    },
    img: {
      type: String,
    },
    userId: {
      type: Boolean,
      required: false,
    },
    slug: {
      type: String,
      required: false,
      unique: true,
    },
  },
  { timestamps: true }
);

// 스키마가 있다면 A, 아니면 B
export const User = mongoose.model.User || mongoose.model("User", userSchema);
export const Post = mongoose.model.Post || mongoose.model("Post", postSchema);
