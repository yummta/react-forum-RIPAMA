/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Comment({ author, date, body, id, children }) {
  return (
    <section
      css={{
        borderStyle: "solid",
        borderWidth: "1px",
        margin: "10px",
        padding: "10px",
        width: "70%"
      }}
    >
      <h1>{id}</h1>
      <span>{author}</span>
      <time>{date}</time>
      <div>
        <p>{body}</p>
      </div>

      <div
        css={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          width: "70%"
        }}
      >
        {children}
      </div>
    </section>
  );
}

export default Comment;
