import Image from "next/image";
import styles from "./SinglePost.module.css";

export default function SinglePost({ params }) {
  console.log(params);
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
        <h2 className={styles.title}>Title</h2>
        <div className={styles.detail}>
          <Image
            className={styles.avatar}
            src="/noavatar.png"
            alt="avatar"
            width={50}
            height={50}
          />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Author</span>
            <span className={styles.detailValue}>Jinwoo</span>
          </div>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01.01.2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et quas
          deleniti ipsum fugiat vero sunt nostrum, ipsam voluptatem tenetur
          asperiores, esse fugit quis atque culpa incidunt deserunt non quo
          facere!
        </div>
      </div>
    </div>
  );
}
