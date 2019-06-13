import React from "react";

function Login() {
  return (
    <div>
      <form onSubmit="">
        <label htmlFor="username">Username</label>
        <input id="username" type="text" name="username" placeholder="Put your username"/>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" name="email" placeholder="Put your email"/>
      </form>
    </div>
  );
}

export default Login;
