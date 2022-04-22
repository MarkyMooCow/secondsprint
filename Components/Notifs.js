import React from "react";
import {
  FaShare,
  FaHeart,
} from "react-icons/fa";

export default function Notifs() {
  return (
    <div id="notifs">
      <Drawer />
      <h2>Notifications</h2>
      <p class='notif'> <FaShare style={{color: 'Green'}}/> <strong>BigKirbyFan</strong> shared your post!</p>
      <p class='notif'> <FaHeart style={{color: 'Red'}} /><strong>@BigKirbyFan</strong> liked your post!</p>
      <p class='notif'> <FaHeart style={{color: 'Red'}} /><strong>@WeakestOnePieceFan</strong> liked your post!</p>
      <p class='notif'> <FaHeart style={{color: 'Red'}} /><strong>@FakeSocialMedia</strong> liked your post!</p>
      <p class='notif'> <FaShare style={{color: 'Green'}} /><strong>@ShulkXenobladeReal</strong> shared your post!</p>
      <p class='notif'> <FaHeart style={{color: 'Red'}} /><strong>@ShulkXenobladeReal</strong> liked your post!</p>
    </div>
  );
}
