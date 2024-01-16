"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NavigationTestPage() {
  const router = useRouter();

  const handleClick = () => {
    console.log("클릭!");
    // router.push("/");
    // router.replace("/"); 브라우저 히스토리스택에 새로운 엔트리 추가X
    // router.refresh(); 새로고침해서 서버에 새로운 요청을 보내 데이터 갱신해줌
    // router.back(); 이전 페이지 열기
    // router.forward(); 다음 페이지 열
  };

  return (
    <div>
      <Link href="/" prefetch={false}>
        Click Here!
      </Link>
      <button onClick={handleClick}>Write and Redirect</button>
    </div>
  );
}
