"use client";

import { useState } from "react";
import { links } from "@/constants/_index";
import NavLink from "./NavLink/NavLink";
import styles from "./Links.module.css";

export default function Links() {
  // 메뉴 버튼
  const [open, setOpen] = useState(false);

  // 임시 로그인 상태
  const session = true;
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
          {session ? (
            // 어드민 계정일 경우
            <>
              {isAdmin && <NavLink item={{ title: "Admin", path: "/admin" }} />}
              <button className={styles.logout}>Logout</button>
            </>
          ) : (
            // 일반 계정일 경우
            <NavLink item={{ title: "Login", path: "/login" }} />
          )}
        </nav>
        <button
          className={styles.menuButton}
          onClick={() => setOpen((prev) => !prev)}
        >
          Menu
        </button>
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
