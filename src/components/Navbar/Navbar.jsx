import Link from "next/link";
import Links from "./Links/Links";
import styles from "./Navbar.module.css";
import { auth } from "@/lib/auth";

export default async function Navbar() {
  const session = await auth();

  console.log(session);

  return (
    <header className={styles.container}>
      <h1 className={styles.logo}>
        <Link href="/">JINU</Link>
      </h1>
      <Links session={session} />
    </header>
  );
}
