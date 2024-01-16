import Image from "next/image";
import styles from "./About.module.css";

export default function AboutPage() {
  console.log("어디에서 동작할까?");

  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p className={styles.subtitle}>About Agency</p>
        <p className={styles.title}>
          We created digital ideas that are bigger, bolder, braver and better
        </p>
        <p className={styles.desc}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi sunt,
          animi labore nemo necessitatibus vel porro, voluptatibus laudantium
          eos culpa nobis aspernatur modi tenetur blanditiis dolor iusto magni
          quo possimus?
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <span>10 K+</span>
            <span>Year of experience</span>
          </div>
          <div className={styles.box}>
            <span>10 K+</span>
            <span>Year of experience</span>
          </div>
          <div className={styles.box}>
            <span>10 K+</span>
            <span>Year of experience</span>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/about.png" alt="about" fill />
      </div>
    </div>
  );
}
