import Image from "next/image";
import { getUser, getUsers } from "@/lib/data";
import styles from "./PostUser.module.css";

/* API로 데이터 패칭하는 함수 */
// const getData = async (userId) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/users/${userId}`,
//     { cache: "no-store" }
//   );

//   if (!res.ok) {
//     throw new Error("에러남");
//   }

//   return res.json();
// };

export default async function PostUser({ userId }) {
  // const user = await getData(userId);
  const user = await getUser(userId);
  console.log(user);

  return (
    <div className={styles.container}>
      <Image
        className={styles.avatar}
        src={user?.img ? user.img : "/noavatar.png"}
        alt="avatar"
        width={50}
        height={50}
      />
      <div className={styles.texts}>
        <span className={styles.title}>Author</span>
        <span className={styles.username}>{user?.username}</span>
      </div>
    </div>
  );
}
