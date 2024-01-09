import Link from "next/link";
import { links } from "@/constants/_index";
import styles from "./Links.module.css";

export default function Links() {
  return (
    <nav className={styles.links}>
      {links.map((link) => {
        const { id, path, title } = link;

        return (
          <Link key={id} href={path}>
            {title}
          </Link>
        );
      })}
    </nav>
  );
}
