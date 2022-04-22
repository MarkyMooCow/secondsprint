import React from "react";
import Notifs from "./Components/Notifs";
import Message from "./Components/Message";
import Home from "./Components/Home";
import Login from "./Components/Login";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";;
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  container: {
    display: "flex",
    width: "1000px",
  },
});
function App() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Router>
        <Routes>
          <Route path="/" exact element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/message" element={<Message />} />
          <Route path="/notifs" element={<Notifs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
