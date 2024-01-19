"use client";

import { useState } from "react";
import Image from "next/image";
import { links } from "@/constants/_index";
import NavLink from "./NavLink/NavLink";
import styles from "./Links.module.css";
import { handleLogout } from "@/lib/action";

export default function Links({ session }) {
  // 메뉴 버튼
  const [open, setOpen] = useState(false);

  // 임시 로그인 상태
  const isAdmin = true;

  return (
    <>
      <div className={styles.container}>
        <nav className={styles.links}>
          {/* 링크 */}
          {links.map((link) => (
            <NavLink key={link.id} item={link} />
          ))}
          {/* 세션 */}
          {session?.user ? (
            // 어드민 계정일 경우
            <>
              {session.user?.isAdmin && (
                <NavLink item={{ title: "Admin", path: "/admin" }} />
              )}
              <form action={handleLogout}>
                <button className={styles.logout}>Logout</button>
              </form>
            </>
          ) : (
            // 일반 계정일 경우
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </nav>
        <Image
          src="/menu.png"
          alt=""
          width={30}
          height={30}
          onClick={() => setOpen((prev) => !prev)}
          className={styles.menuButton}
        />
        {open && (
          <div className={styles.mobileLinks}>
            {links.map((link) => (
              <NavLink key={link.id} item={link} />
            ))}
          </div>
        )}
      </div>
    </>
  );
}
