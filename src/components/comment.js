/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Comment({ name, date, body, children }) {
  return (
    <section
      css={{
        borderStyle: "solid",
        borderWidth: "1px",
        margin: "10px",
        padding: "10px"
      }}
    >
      <span>{name}</span>
      <time>{date}</time>
      <div>
        <p>{body}</p>
      </div>
      {children}
    </section>
  );
}

export default Comment;
