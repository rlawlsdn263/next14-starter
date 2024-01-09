import Links from "./Links/Links";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>Logo</h1>
      <Links />
    </header>
  );
}
