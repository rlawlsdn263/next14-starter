import { links } from "@/constants/_index";
import NavLink from "./NavLink/NavLink";
import styles from "./Links.module.css";

export default function Links() {
  return (
    <nav className={styles.links}>
      {links.map((link) => {
        return <NavLink key={link.id} item={link} />;
      })}
    </nav>
  );
}
