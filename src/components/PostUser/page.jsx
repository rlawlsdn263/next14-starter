import styles from "./PostUser.module.css";

/* 데이터 패칭하는 함수 */
const getData = async (userId) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${userId}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("에러남");
  }

  return res.json();
};

export default async function PostUser({ userId }) {
  const user = await getData(userId);

  return (
    <div className={styles.container}>
      <span className={styles.title}>Author</span>
      <span className={styles.username}>{user.username}</span>
    </div>
  );
}
