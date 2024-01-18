import { Post, User } from "./models";
import { connectToDB } from "./utils";

// 임시 데이터
// const users = [
//   { id: 1, username: "김진우" },
//   { id: 2, username: "김도현" },
//   { id: 3, username: "현지수" },
//   { id: 4, username: "김제제" },
// ];

// const posts = [
//   { id: 1, title: "제목1", body: "본문1", userId: 1 },
//   { id: 2, title: "제목2", body: "본문2", userId: 2 },
//   { id: 3, title: "제목3", body: "본문3", userId: 3 },
//   { id: 4, title: "제목3", body: "본문4", userId: 4 },
// ];

export const getPosts = async () => {
  try {
    connectToDB();
    const posts = await Post.find();
    return posts;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch posts!");
  }
};

export const getPost = async (slug) => {
  try {
    connectToDB();
    const post = await Post.findOne({ slug: slug });
    return post;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch post!");
  }
};

export const getUser = async (id) => {
  try {
    connectToDB();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch user!");
  }
};

export const getUsers = async () => {
  try {
    connectToDB();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to fetch users!");
  }
};
