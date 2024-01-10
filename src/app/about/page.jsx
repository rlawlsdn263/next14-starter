import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <div>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/16675647/pexels-photo-16675647.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="about"
          fill
        />
      </div>
    </div>
  );
}
