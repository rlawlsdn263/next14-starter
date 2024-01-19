import { addPost } from "@/lib/action";

export default function ServerActionTest() {
  //   const actionInComponent = async () => {
  //     "use server";
  //     console.log("이게 서버 액션임ㅋ");
  //   };

  return (
    <div>
      <form action={addPost}>
        <input type="text" placeholder="title" name="title" />
        <input type="text" placeholder="desc" name="desc" />
        <input type="text" placeholder="slug" name="slug" />
        <input type="text" placeholder="userId" name="userId" />
        <button>Create User</button>
      </form>
    </div>
  );
}
