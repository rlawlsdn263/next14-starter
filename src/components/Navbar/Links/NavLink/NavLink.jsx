
import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLink.module.css";

export default function NavLink({ item }) {

  const { path, title } = item;

  return (
    <Link
      href={path}
    >
      {title}
    </Link>
  );
}
