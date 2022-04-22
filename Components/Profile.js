import React from 'react'
import { FaHome, FaBell, FaEnvelope, FaUser, FaCog, FaBookmark, FaEllipsisH, FaShare, FaHeart, FaCommentDots } from 'react-icons/fa'
import './Style.css';
export default function Profile() {
  return (
    <div id="myHead3">
     <h1>DAIIISSSYYY MAIIIN</h1> 
     <div class="grid-container">
  <div class="item1">Banner</div>
  <div class="item2">Heyo, my name is Tom McDeveloper and I am developing this very website as we speak!

Fun fact though, I only exist within your mind, because I literally do not exist in real life and will cease to exist when you forget about me.

plz don’t.</div>
  <div class="item3">Favaorite food: Pizza <br></br>
  Favorite Movie Kingsman <br></br>
  Favorite Book: Doesnt Read <br></br>
  Favorite Color Red <br></br>
  Favorite Quote: "Check this out!"</div>  
  <div class="item4">Post 
  <p>Username @Username • 10h Ago</p>

      <div class="a"> <p>Yooo this duck is so random!</p> </div>
      
      <img src="test.jpg"></img> <br></br>
      <div style={{ display: "flex" }}>
        <p class="notifs">
          {" "}
          <FaHeart style={{ color: "Red" }} /> 100k &nbsp; &nbsp; &nbsp; &nbsp;
          &nbsp;{" "}
        </p>
        <p class="notifs">
          {" "}
          <FaShare style={{ color: "Black" }} /> Share{" "}
        </p>{" "}
        &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
        <p class="notifs">
          {" "}
          <FaCommentDots style={{ color: "Black" }} /> 10k{" "}
        </p>{" "}
        &nbsp;
      </div>
  </div>
  
</div>
    </div>
    
  )
}
