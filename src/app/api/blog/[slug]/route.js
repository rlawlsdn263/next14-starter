import { Post } from "@/lib/models";
import { connectToDB } from "@/lib/utils";
import { NextResponse } from "next/server";

// 슬러그에서는 params가 필요하다
// request 후에 나올 수 있다

export const GET = async (request, { params }) => {
  const { slug } = params;
  try {
    connectToDB();
    const post = await Post.findOne({ slug });
    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    throw new Error("post 불러오기 실패");
  }
};

export const DELETE = async ({ params }) => {
  const { slug } = params;
  try {
    connectToDB();
    await Post.deleteOne({ slug });
    return NextResponse.json("삭제함");
  } catch (error) {
    console.log(error);
    throw new Error("삭제 불러오기 실패");
  }
};
