import { PencilLine } from "phosphor-react";

import styles from "./Sidebar.module.css";
import { Avatar } from "./Avatar";

export function Sidebar() {
  return (
    <>
      <aside className={styles.sidebar}>
        <img
          className={styles.cover}
          src="https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=500&q=50"
        />
        <div className={styles.profile}>
          {/* <img
            className={styles.avatar}
            src="https://github.com/Gabriel-Leal.png"
          /> */}
          <Avatar src="https://github.com/Gabriel-Leal.png" />
          <strong>Gabriel Sala</strong>
          <span>Frontend Developer</span>
        </div>
        <footer>
          <a href="#">
            <PencilLine size={20} /> Edit profile
          </a>
        </footer>
      </aside>
    </>
  );
}
