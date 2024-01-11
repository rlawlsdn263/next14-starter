import Link from "next/link";
import Image from "next/image";
import styles from "./PostCard.module.css";

export default function PostCard() {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imgContainer}>
          <Image
            src="https://images.pexels.com/photos/12225078/pexels-photo-12225078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01.01.2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.desc}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad possimus
          odio repudiandae praesentium optio consequatur assumenda nam a
          molestiae vel quibusdam, explicabo consectetur est magni laudantium
          omnis provident sed pariatur.
        </p>
        <Link href="/blog/post" className={styles.link}>
          READ MORE
        </Link>
      </div>
    </div>
  );
}
