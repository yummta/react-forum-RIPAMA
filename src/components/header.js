/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/core";
import { Link } from "@reach/router";
import UserContext from "../contexts/user";
import logo from "../assets/logo.png";
function Header({ setUser }) {
  const user = React.useContext(UserContext);

  function onLogout() {
    const emptyUser = { username: "", email: "" };
    localStorage.setItem("user", JSON.stringify(emptyUser));
    setUser(emptyUser);
  }
  const BlackHover = css({
    ":hover": { backgroundColor: "black", color: "white" }
  });

  return (
    <header
      css={{
        display: "flex",
        backgroundColor: "#f1f1f1",
        alignItems: "center",
        border: "0",
        fontSize: "larger",
        fontFamily: "Arial",
        "& a": {
          textDecoration: "none",
          lineHeight: "25px",
          borderRadius: "4px",
          padding: "12px",
          "@media (max-width: 960px)": {
            fontSize: "medium"
          }
        }
      }}
    >
      <span css={{ marginRight: "auto" }}>
        <img src={logo} alt="Logo" />
      </span>
      <span
        css={{
          justifySelf: "center",
          fontSize: "larger",
          "@media (max-width: 960px)": {
            display: "none"
          }
        }}
      >
        {user.username ? `Hi ${user.username}` : "Welcome!"}
      </span>
      <div
        css={{
          marginLeft: "auto",
          "@media (max-width: 960px)": {
            marginRight: "10px"
          }
        }}
      >
        <Link aria-label="New Discussion" to="/new" css={BlackHover}>
          New Discussion
        </Link>
        <Link to="/" onClick={onLogout} css={BlackHover}>
          LogOut
        </Link>
      </div>
    </header>
  );
}

export default Header;
