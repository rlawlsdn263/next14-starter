import { Suspense } from "react";
import Image from "next/image";
import styles from "./SinglePost.module.css";
import PostUser from "@/components/PostUser/page";
import { getPost } from "@/lib/data";

/* API로 데이터 패칭하기 */
// const getData = async (slug) => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);

//   if (!res.ok) {
//     throw new Error("에러남");
//   }

//   return res.json();
// };

export default async function SinglePost({ params }) {
  const { slug } = params;

  // const post = await getData(slug);

  /* API 없이 데이터 패칭하기 */
  const post = await getPost(slug);

  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          className={styles.img}
          src="https://images.pexels.com/photos/12225078/pexels-photo-12225078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill
        />
      </div>
      <div className={styles.textContainer}>
        <h2 className={styles.title}>{post?.title}</h2>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/noavatar.png"
            alt="avatar"
            width={50}
            height={50}
          />
          {post && (
            <Suspense fallback={<div>로딩 중...</div>}>
              <PostUser userId={post?.userId} />
            </Suspense>
          )}
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>{post?.body}</div>
      </div>
    </div>
  );
}
