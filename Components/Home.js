import React from "react";
import {
  FaHeart,
  FaCommentDots,
  FaShare,
} from "react-icons/fa";
export default function Home() {
  return (
    <div id="myHead5">
      <h2>Home</h2>
      
      <p>Username @Username • 10h Ago</p>

      <div class="a"> <p>Yooo this duck is so random!</p> </div>
      
      <img src="test.jpg"></img> <br></br>
      <div style={{ display: "flex" }}>
        <p class="notif">
          {" "}
          <FaHeart style={{ color: "Red" }} /> 100k &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
        </p>
        <p class="notifs">
          {" "}
          <FaShare style={{ color: "Black" }} /> Share{" "}
        </p>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <p class="notifs">
          {" "}
          <FaCommentDots style={{ color: "Black" }} /> 10k{" "}
        </p>{" "}
        &nbsp;
      </div>
    </div>
  );
}
