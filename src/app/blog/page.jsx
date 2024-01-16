import { PostCard } from "@/components/_index";
import styles from "./Blog.module.css";
import { getPosts } from "@/lib/data";

/* API로 데이터 패칭하기 */
// const getData = async () => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
//     next: { revalidate: 3600 },
//   });

//   if (!res.ok) {
//     throw new Error("에러남");
//   }

//   return res.json();
// };

export default async function Blog() {
  // const posts = await getData();

  /* API 없이 데이터 패칭하기 */
  const posts = await getPosts();

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
