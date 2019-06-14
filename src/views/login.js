import React from "react";
import { Link } from "@reach/router";

function Login({ onUser }) {
  const [username, setUsername] = React.useState();
  const [email, setEmail] = React.useState();

  // users : {
  //   0 : {username: 'Paul', email : 'paul@able.com'},
  //   1 : {username: 'Paulo', email : 'paulo@able.com}',
  // }

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ username, email });

    onUser({ username, email });
  }

  function handleChange(event) {
    let value = event.target.value;

    event.target.name === "username" ? setUsername(value) : setEmail(value);
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          name="username"
          placeholder="Put your username"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="text"
          name="email"
          placeholder="Put your email"
          onChange={handleChange}
        />
        <button>submit</button>
      </form>
      <Link to="/discussions">Discussions</Link>
    </div>
  );
}

export default Login;
