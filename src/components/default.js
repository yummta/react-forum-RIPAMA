/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Default({ name, date, body, children }) {
  return (
    <section
      css={{
        borderStyle: "solid",
        color: "blue",
        fontSize: "40px",
        borderWidth: "1px",
        margin: "10px",
        padding: "10px"
      }}
    >
      <p> We are so so so , sorry this didn't work between us.</p>
    </section>
  );
}

export default Default;
