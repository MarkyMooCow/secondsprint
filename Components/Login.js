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
//*Grid Box
.item1 {
  grid-area: Banner;
  background-image: url("./logo512.png");
}
.item2 {
  grid-area: Bio;
}
.item3 {
  grid-area: Favorite;
}
.item4 {
  grid-area: Post;
}


.grid-container {
  display: grid;
  grid-template-areas:
    "Banner Banner"
    "Banner Banner"
    "Bio Post"
    "Favorite Post"
    "Favorite Post";
  gap: 10px;
  background-color: #c72828;
  padding: 10px;
}

.grid-container > div {
  background-color: rgba(243, 241, 241, 0.8);
  text-align: center;
  padding: 20px 0;
  font-size: 30px;
}
