import React from "react";
import "./Style.css";
import "../App.css";
import Drawer from "./Drawer";

export default function Message() {
  return (
    <div>
      <Drawer />
      <div id="converse">
        <h2>Conversations</h2>
        <p className="convo">
          <span className="profile1">&#40;pic&#41;</span>BuddyPalFriendo
        </p>
        <p className="convo">
          <span className="profile2">&#40;pic&#41;</span>TheManThatGoesAAAAAAAA
        </p>
        <p className="convo">
          <span className="profile3">&#40;pic&#41;</span>Larry41325
        </p>
        <p className="convo">
          <span className="profile4">&#40;pic&#41;</span>ApplewoodSmokedBacon
        </p>
        <p className="convo">
          <span className="profile5">&#40;pic&#41;</span>DBZF0Lyyyyyfe
        </p>
      </div>
      <div id="messages">
        <h2>Messages</h2>
        <p className="sentMessage">Heyo!</p>
        <p className="recMessage">
          <span className="profile1">&#40;pic&#41;</span>My parents left me.
        </p>
        <p className="sentMessage">How ya doin?</p>
        <input
          type="text"
          id="messagebar"
          placeholder="write a message"
        ></input>
      </div>
    </div>
  );
}
