import Image from "next/image";
import styles from "./Contact.module.css";
import dynamic from "next/dynamic";
// import HydrationTest from "@/components/HydrationTest";

/* 다이나믹 import */
// 다음처럼 컴포넌트를 import하고 ssr: false를 해주면 SSR 없이 import를 해준다
const HydrationTestNoSSR = dynamic(() => import("@/components/HydrationTest"), {
  ssr: false,
});

export default function Contact() {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image src="/contact.png" alt="contact" fill className={styles.img} />
      </div>
      <div className={styles.formContainer}>
        <HydrationTestNoSSR />
        <form action="" className={styles.form}>
          <input type="text" placeholder="Name and Surname" />
          <input type="text" placeholder="Email Address" />
          <input type="text" placeholder="Phone Number (Optional)" />
          <textarea
            name=""
            id=""
            cols="30"
            rows="10"
            placeholder="Message"
          ></textarea>
          <button>Send</button>
        </form>
      </div>
    </div>
  );
}
