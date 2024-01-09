import Link from "next/link";
import { links } from "@/constants/_index";

export default function Links() {
  return links.map((link) => {
    const { id, path, title } = link;

    return (
      <Link key={id} href={path}>
        {title}
      </Link>
    );
  });
}
