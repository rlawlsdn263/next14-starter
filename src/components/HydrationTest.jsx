"use client";

export default function HydrationTest() {
  const a = Math.random();
  console.log(a);

  return <div>{a}</div>;
}
