import Link from "next/link";

export default function NavigationTestPage() {
  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here!
      </Link>
    </div>
  );
}
