/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import Comment from "../components/comment";

function Discussion({ discussions, comments, id, user, setComments }) {
  const [commentContent, setCommentContent] = React.useState("");
  const [username, setUsername] = React.useState("");


  function handleChangeComment(event) {
    setCommentContent(event.target.value);
  }

  function addComment(commentData, parent) {
    setComments(state => {
      state[parent].comments.push(state.length);
      return [...state, commentData];
    });
    localStorage.setItem("comments", JSON.stringify(comments));
  }

  function handleNewComment(event) {
    event.preventDefault();

    const commentData = {
      id: comments.length,
      body: commentContent,
      author: user.username,
      date: "2019-06-02T00:45:43.963Z",
      comments: []
    };

    addComment(commentData, id);
    return;
  }

  function renderChildren(id, comments) {
    return (
      <div
        key={id}
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <Comment {...comments[id]}>
          {comments[id].comments.map(commentId =>
            renderChildren(commentId, comments)
          )}
        </Comment>
      </div>
    );
  }

  return (
    <div>
      <main>
        <h1>title</h1>
        <p>{discussions[id].title}</p>
        <h2>author</h2>
        <p>{discussions[id].author}</p>
        <h2>creation date</h2>
        <date>{discussions[id].date}</date>
        <p>New comment</p>
        <form onSubmit={handleNewComment}>
          <textArea name="new-comment" onChange={handleChangeComment} />
          <button>Create comment</button>
        </form>
      </main>

      <article>{renderChildren(id, comments)}</article>
    </div>
  );
}

export default Discussion;
