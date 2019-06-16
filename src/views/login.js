
/** @jsx jsx */
import React from "react";
import { Redirect } from "@reach/router";
import UserContext from "./../contexts/user";
import { jsx } from "@emotion/core";

function Login({ onUser }) {
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();
  const [logged, setLogged] = React.useState(false);
  const user = React.useContext(UserContext);

  React.useEffect(() => {
    if (user.username) {
      setLogged(true);
    }
  }, [user]);

  function handleSubmit(event) {
    event.preventDefault();
    onUser({ username, email });
    setLogged(true);
  }

  function handleChange(event) {
    let value = event.target.value;
    event.target.name === "username" ? setUsername(value) : setEmail(value);
  }

  if (logged) {
    return <Redirect to="/discussions/" noThrow />;
  }
  return (
    <div
      role="main"
      css={{
        minHeight: "80vh",
        margin: "0 0 0 0",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        fontSize: "larger",
        fontFamily: "Arial"
      }}
    >
      <form
        onSubmit={handleSubmit}
        css={{
          display: "flex",
          flexDirection: "column",
          width: "400px",
          boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.5)",
          padding: "1em",
          background: "rgba(22, 22, 22, 0.57)",
          borderRadius: "0.5em",
          "& label, input": { fontFamily: "Arial", fontSize: "larger" }
        }}
      >

        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required="required"
          name="username"
          placeholder="Put your username"
          onChange={handleChange}
        />
        <label htmlFor="email" css={{ paddingTop: "0.5em" }}>
          Email
        </label>
        <input
          id="email"
          type="email"
          required="required"
          name="email"
          placeholder="Put your email"
          onChange={handleChange}
        />
        <button
          css={{
            backgroundColor: "black",
            border: "none",
            color: "white",
            padding: "15px 32px",
            textAlign: "center",
            textDecoration: "none",
            display: "inline-block",
            fontSize: "larger",
            margin: "4px 2px",
            cursor: "pointer",
            marginTop: "0.5em"
          }}
        >
          submit
        </button>
      </form>
    </div>
  );
}

export default Login;
