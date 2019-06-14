/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";

function Header() {
  return (
    <header
      css={{
        display: "flex",
        overflow: "hidden",
        backgroundColor: "#f1f1f1",
        padding: "20px 10px",
        alignItems: "baseline"
      }}
    >
      <span css={{ marginRight: "auto" }}>Logo</span>
      <span css={{ justifySelf: "center" }}>Hi User </span>
      <div css={{ marginLeft: "auto" }}>
        <button aria-label="New Discussion">+</button>
        <button>LogOut</button>
      </div>
    </header>
  );
}

export default Header;
