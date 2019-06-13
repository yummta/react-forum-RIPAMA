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
      <p>{name}</p>
      <p>{date}</p>
      <p>{body}</p>
      {children}
    </section>
  );
}

export default Comment;
