import Link from "next/link";
import Links from "./Links/Links";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <Link href="/">JINU</Link>
      </h1>
      <Links />
    </header>
  );
}
