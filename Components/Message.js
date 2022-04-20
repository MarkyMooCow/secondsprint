import React from 'react'
import './Login.css';

export default function Message() {
  return (
    <div>
      <div id='converse'>
        <h1>Conversations</h1>
        <p className='convo'>BuddyPalFriendo</p>
        <p className='convo'>TheManThatGoesAAAAAAAA</p>
      </div>
      <div id="messages">
        <h1>Messages</h1>
        <p className='sentMessage' id='Text1'>Heyo!</p>
        <p className='recMessage' id='Text2'>My parents left me.</p>
        <p className='sentMessage' id='Text3'>How ya doin?</p>
      </div>
  </div>
  )
}
