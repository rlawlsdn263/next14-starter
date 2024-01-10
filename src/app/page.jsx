import Image from "next/image";
import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.title}>Creative Thoughts Agency</p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim eligendi
          quo eveniet provident odit ipsa fugiat distinctio voluptate voluptatum
          explicabo maxime doloribus id temporibus optio nisi, illo ipsum, at
          autem!
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image
            src="/brands.png"
            alt="Brand Image"
            fill
            className={styles.brandImg}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/hero.gif"
          alt="Brand Image"
          fill
          className={styles.heroImg}
        />
      </div>
    </div>
  );
}
