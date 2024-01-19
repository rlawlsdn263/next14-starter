import { Suspense } from "react";
import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/PostUser/page";
import { getPost } from "@/lib/data";

/* API로 데이터 패칭하기 */
const getData = async (slug) => {
  const res = await fetch(`http://localhost:3000/api/blog/${slug}`);

  if (!res.ok) {
    throw new Error("에러남");
  }

  return res.json();
};

export const generateMetadata = async ({ params }) => {
  const { slug } = params;
  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

export default async function SinglePost({ params }) {
  const { slug } = params;

  const post = await getData(slug);

  /* API 없이 데이터 패칭하기 */
  // const post = await getPost(slug);

  return (
    <div className={styles.container}>
      {post.img && (
        <div className={styles.imgContainer}>
          <Image className={styles.img} src={post.img} alt="" fill />
        </div>
      )}
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post.title}</h2>
        <div className={styles.detail}>
          {post && (
            <Suspense fallback={<div>로딩 중...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>
              {post.createdAt.toString().slice(4, 16)}
            </span>
          </div>
        </div>
        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
}
