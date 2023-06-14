import { ThumbsUp, Trash } from "phosphor-react";
import styles from "./Comment.module.css";
import { Avatar } from "./Avatar";
import { useState } from "react";

export function Comment({ content, onDeleteComment }) {
  const [likeCount, setLikeCount] = useState(0);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // const newLikeCount = likeCount + 1;
    // setLikeCount(newLikeCount);
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <>
      <div className={styles.comment}>
        <Avatar hasBorder={false} src="https://github.com/Gabriel-Leal.png" />
        <div className={styles.commentBox}>
          <div className={styles.commentContent}>
            <header>
              <div className={styles.authorAndTime}>
                <strong>Gabriel Sala</strong>
                <time
                  title="2023-01-01 04:13:30"
                  dateTime="2023-01-01 04:13:30"
                >
                  Published 1hour ago
                </time>
              </div>
              <button onClick={handleDeleteComment} title="Delete comment">
                <Trash size={24} />
              </button>
            </header>
            <p>{content}</p>
          </div>
          <footer>
            {/* if I use handleLikeComment() it will execute the function without click  */}
            {/* To solve that problem I need to use an arrow function like {() => handleLikeComment()} */}
            <button onClick={handleLikeComment}>
              <ThumbsUp /> Like <span>{likeCount}</span>
            </button>
          </footer>
        </div>
      </div>
    </>
  );
}
