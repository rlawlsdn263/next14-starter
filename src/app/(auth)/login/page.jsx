// import { signIn, auth } from "@/lib/auth";
import { handleGithubLogin } from "@/lib/action";

export default async function Login() {
  // const session = await auth();
  // console.log(session);

  // const handleGithubLogin = async () => {
  //   "use server";
  //   await signIn("github");
  // };

  return (
    <div>
      <form action={handleGithubLogin}>
        <button>깃헙 로그인</button>
      </form>
    </div>
  );
}
