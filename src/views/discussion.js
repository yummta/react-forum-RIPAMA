/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Comment from "../components/comment";

function Discussion({ discussions, comments, id, user, setComments }) {
  const discussion = discussions[id];
  const [commentContent, setCommentContent] = React.useState("");
  const [username, setUsername] = React.useState("");

  function handleChangeComment(event) {
    setCommentContent(event.target.value);
  }

  function addComment(commentData, newId) {
    const currentComments = { ...comments };
    currentComments[id]["comments"].push(newId);
    const updateComments = { ...currentComments, [newId]: commentData };
    setComments(updateComments);
    localStorage.setItem("comments", JSON.stringify(updateComments));
  }

  function handleNewComment(event) {
    event.preventDefault();
    const newId = Date.now();
    const commentData = {
      id: newId,
      parent: id,
      body: commentContent,
      author: user.username,
      date: newId,
      comments: []
    };
    addComment(commentData, newId);
    return;
  }

  function renderChildren(idComment, comments) {
    console.log(idComment);
    return (
      <div
        // key={idComment}
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid red"
        }}
      >
        <h1>{idComment}</h1>
        {/* <Comment {...comments[idComment]}>
          {comments[idComment].comments.map(commentId => {
            console.log(commentId);
            renderChildren(commentId, comments);
          })}
        </Comment> */}
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1>{discussion.title}</h1>
        <div>
          <span>By {discussion.author}</span>
          <br />
          <time>Publish {discussion.date}</time>
        </div>
        <p>{discussion.body}</p>
      </main>
      <form onSubmit={handleNewComment}>
        <textarea
          placeholder="What are your thoughts?"
          name="new-comment"
          onChange={handleChangeComment}
        />
        <button>Create comment</button>
      </form>
      <article>{renderChildren(id, comments)}</article>
    </div>
  );
}

export default Discussion;
