/** @jsx jsx */
import React from "react";
import { jsx } from "@emotion/core";
import { Link } from "@reach/router";
import UserContext from "../contexts/user";

function Header({ setUser }) {
  const user = React.useContext(UserContext);

  function onLogout() {
    const emptyUser = { username: "", email: "" };
    localStorage.setItem("user", JSON.stringify(emptyUser));
    setUser(emptyUser);
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
      <span css={{ justifySelf: "center" }}>Hi {user.username} </span>
      <div css={{ marginLeft: "auto" }}>
        <Link aria-label="New Discussion" to="/new">
          New Discussion
        </Link>
        <Link to="/" onClick={onLogout}>
          LogOut
        </Link>
      </div>
    </header>
  );
}

export default Header;
