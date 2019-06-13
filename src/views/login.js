import React from "react";

function Login() {
  return (
    <div>
      <form onSubmit="">
        <p>Usuario</p>
        <input type="text" label="usuario" />
        <p>Email</p>
        <input type="text" label="email" />
      </form>
    </div>
  );
}

export default Login;
