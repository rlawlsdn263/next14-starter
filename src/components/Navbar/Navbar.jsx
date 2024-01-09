import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <h1>Logo</h1>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
      </nav>
    </div>
  );
}
