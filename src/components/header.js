/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";

function Header() {
  function clearStorage() {
    localStorage.setItem("user", JSON.stringify({ username: "", email: "" }));
  }

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
      <span css={{ justifySelf: "center" }}>Hi {username} </span>
      <div css={{ marginLeft: "auto" }}>
        <Link aria-label="New Discussion" to="/new">
          New Discussion
        </Link>
        <a href="/" onClick={clearStorage}>
          LogOut
        </a>
      </div>
    </header>
  );
}

export default Header;
