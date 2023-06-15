import { useState, ChangeEvent, FormEvent, InvalidEvent } from "react";
import { Avatar } from "./Avatar";
import { Comment } from "./Comment";
import styles from "./Post.module.css";
import { format, formatDistanceToNow } from "date-fns";

interface Author {
  name: string;
  role: string;
  avatarUrl: string;
}

interface Content {
  type: "paragraph" | "link";
  content: string;
}

export interface PostType {
  id: number;
  author: Author;
  publishedAt: Date;
  content: Content[];
}

interface PostProps {
  post: PostType;
}

export function Post({ post }: PostProps) {
  const [comments, setComments] = useState(["Great Post!"]);
  const [newCommentText, setNewCommentText] = useState("");
  // const publishedDateFormatted = new Intl.DateTimeFormat("pt-BR", {
  //   day: "2-digit",
  //   month: "long",
  //   hour: "2-digit",
  //   minute: "2-digit",
  // }).format(publishedAt);

  const publishedDateFormatted = format(
    post.publishedAt,
    "dd 'de' LLLL 'às' HH:mm'h'"
  );

  const publishedDateRelativeToNow = formatDistanceToNow(post.publishedAt, {
    addSuffix: true,
  });

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("");
    setNewCommentText(event.target.value);
  }
  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();
    // const newCommentText = event.target.comment.value;

    setComments([...comments, newCommentText]);
    setNewCommentText("");
    //   event.target.comment.value = "";
  }

  function deleteComment(commentToDelete: string) {
    const commentsWithoutDeleteOne = comments.filter((comment) => {
      return comment !== commentToDelete;
    });
    setComments(commentsWithoutDeleteOne);
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity("This field is required");
  }

  const isNewCommentEmpty = newCommentText.length === 0;

  return (
    <>
      <article className={styles.post}>
        <header>
          <div className={styles.author}>
            <Avatar hasBorder src={post.author.avatarUrl} />

            <div className={styles.authorInfo}>
              <strong>{post.author.name}</strong>
              <span>{post.author.role}</span>
            </div>
          </div>

          <time
            title={publishedDateFormatted}
            dateTime={post.publishedAt.toISOString()}
          >
            {publishedDateRelativeToNow}
          </time>
        </header>
        <div className={styles.content}>
          {post.content.map((item) => {
            if (item.type === "paragraph")
              return <p key={item.content}>{item.content}</p>;
            else if (item.type === "link")
              return (
                <p key={item.content}>
                  <a href="#">{item.content}</a>
                </p>
              );
          })}
        </div>

        <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
          <strong>Give your feedback</strong>
          <textarea
            name="comment"
            placeholder="Type your comment here"
            value={newCommentText}
            onChange={handleNewCommentChange}
            onInvalid={handleNewCommentInvalid}
            required
          ></textarea>
          <footer>
            <button type="submit" disabled={isNewCommentEmpty}>
              Post
            </button>
          </footer>
        </form>
        <div className={styles.commentList}>
          {comments.map((item) => {
            return (
              <Comment
                key={item}
                content={item}
                onDeleteComment={deleteComment}
              />
            );
          })}
        </div>
      </article>
    </>
  );
}
