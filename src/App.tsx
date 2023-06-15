import { Post, PostType } from "./components/Post";
import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";

import "./global.css";
import styles from "./App.module.css";

// author: { avatar_url: "", name: "", role: "" }
// publishedAt: Date
// content: string

const posts: PostType[] = [
  {
    id: 1,
    author: {
      avatarUrl: "https://github.com/Gabriel-Leal.png",
      name: "Gabriel Sala",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor" },
      { type: "paragraph", content: "sit amet consectetur adipisicing elit." },
      {
        type: "paragraph",
        content:
          "Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore",
      },
      {
        type: "paragraph",
        content:
          "mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id.",
      },
      { type: "link", content: "gabriel.sala/Frontend" },
    ],
    publishedAt: new Date("2023-01-01 20:00:00"),
  },
  {
    id: 2,
    author: {
      avatarUrl: "https://github.com/tatiane-leal.png",
      name: "Tatiane Sala",
      role: "Frontend Developer",
    },
    content: [
      { type: "paragraph", content: "Lorem ipsum dolor" },
      { type: "paragraph", content: "sit amet consectetur adipisicing elit." },
      {
        type: "paragraph",
        content:
          "Tempore culpa, dignissimos sint accusantium natus tenetur quasi quas, dolore",
      },
      {
        type: "paragraph",
        content:
          "mollitia dicta rem cupiditate accusamus reiciendis minus pariatur ullam obcaecati eveniet id.",
      },
      { type: "link", content: "tatiane.sala/Frontend" },
    ],
    publishedAt: new Date("2023-01-10 20:00:00"),
  },
];

export function App() {
  return (
    <>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map((item) => (
            <Post key={item.id} post={item} />
          ))}
          {/* {posts.map((item) => {
            return <Post key={item.id} post={post} />;
          })} */}
        </main>
      </div>
    </>
  );
}
