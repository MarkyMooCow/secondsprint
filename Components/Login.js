import React from "react";
import "./Style.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const updateUsername = (e) => {
    setUsername(e.target.value);
    console.log(username);
  };

  let navigate = useNavigate();
  const routeChange = () => {
    if (username === "" || password === "") {
      alert("cannot leave any field blank", "error");
    } else {
      let path = `../home`;
      navigate(path);
    }
  };

  return (
    <div className="SignInBox">
      <form className="SignInForm">
        <h1>Sign In!</h1>
        <label for="username">Username:</label>
        <input
          name="username"
          onChange={updateUsername}
          type="text"
          placeholder="username"
          value={username}
        ></input>
        <label for="password">Password:</label>
        <input
          name="password"
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="password"
          value={password}
        ></input>
        <button
          type="button"
          onClick={() => {
            setUsername("");
            setPassword("");
          }}
          onClick={routeChange}
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;

#myHead5 {
  position: absolute;

  width: 434px;

  height: 1080px;

  left: 600px;

  right: 500px;

  top: 100px;

  background-color:rgba(255,0,0,0.3);
}
