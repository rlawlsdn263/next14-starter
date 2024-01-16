// 임시 데이터
const users = [
  { id: 1, username: "김진우" },
  { id: 2, username: "김도현" },
  { id: 3, username: "현지수" },
  { id: 4, username: "김제제" },
];

const posts = [
  { id: 1, title: "제목1", body: "본문1", userId: 1 },
  { id: 2, title: "제목2", body: "본문2", userId: 2 },
  { id: 3, title: "제목3", body: "본문3", userId: 3 },
  { id: 4, title: "제목3", body: "본문4", userId: 4 },
];

export const getPosts = async () => {
  return posts;
};

export const getPost = async (id) => {
  return posts.find((post) => post.id === parseInt(id));
};

export const getUser = async (id) => {
  return users.find((user) => user.id === parseInt(id));
};
