/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Comment({ author, date, body, id, children }) {
  console.log("wiiii", id);
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
      <div>
        <p>{body}</p>
      </div>
      <span>by {author}</span> | <time> date: {date}</time>
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
