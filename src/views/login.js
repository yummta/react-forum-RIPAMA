import React from "react";
import { Link } from "@reach/router";
import { Redirect } from "@reach/router";
import UserContext from "./../contexts/user";

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
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          type="text"
          required="required"
          name="username"
          placeholder="Put your username"
          onChange={handleChange}
        />
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required="required"
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
