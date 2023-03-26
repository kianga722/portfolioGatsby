import React, { useState } from 'react';
import profilePic from '../assets/images/profilePic.png';

import AvatarStyles from '../styles/components/AvatarStyles';

const Avatar = () => {
  const [jump, setJump] = useState(false)

  const resetAnimation = () => {
    const el = document.querySelector('.avatar');
    el.style.animation = 'none';
    el.getBoundingClientRect(); /* trigger reflow */
    el.style.animation = null; 
  }

  const handleClick = () => {
    resetAnimation();
    setJump(true)
  }

  return (
    <AvatarStyles
      className={`avatar ${jump ? 'jump' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setJump(false)}
    >
      <img
        src={profilePic}
        alt='profile picture of an amazing developer'
      />
    </AvatarStyles>
  )
}

export default Avatar;