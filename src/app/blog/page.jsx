import { PostCard } from "@/components/_index";
import styles from "./Blog.module.css";

export default function Blog(params, searchParams) {
  console.log(params);
  console.log(searchParams);
  return (
    <div className={styles.container}>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
      <div className={styles.post}>
        <PostCard />
      </div>
    </div>
  );
}
