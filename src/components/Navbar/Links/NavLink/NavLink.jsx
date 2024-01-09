"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export default function NavLink({ item }) {
  const pathName = usePathname();

  const { path, title } = item;

  return (
    <Link
      href={path}
      className={`${styles.container} ${
        pathName === item.path && styles.active
      }`}
    >
      {title}
    </Link>
  );
}
