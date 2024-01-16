import { PostCard } from "@/components/_index";
import styles from "./Blog.module.css";

/* 데이터 패칭하는 함수 */
const getData = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: { revalidate: 3600 },
  });

  if (!res.ok) {
    throw new Error("에러남");
  }

  return res.json();
};

export default async function Blog() {
  const posts = await getData();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
}
