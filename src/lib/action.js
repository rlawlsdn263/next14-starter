"use server";

// 서버액션을 쓰면 async 함수여야함.
// 서버액션은 서버에서만 돌아감

import { signIn, signOut } from "./auth";
import { revalidatePath } from "next/cache";
import { Post } from "./models";
import { connectToDB } from "./utils";

export const addPost = async (formData) => {
  const { title, desc, slug, userId } = Object.fromEntries(formData);

  try {
    connectToDB();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
    });

    await newPost.save();
    console.log("saved to db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

export const deletPost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
  } catch (err) {
    console.log(err);
    return { error: "Something went wrong!" };
  }
};

/* 로그인 */
export const handleGithubLogin = async () => {
  await signIn("github");
};

/* 로그아웃 */
export const handleLogout = async () => {
  await signOut();
};
