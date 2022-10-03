import React, { useState } from 'react';
import profilePic from '../images/profPic.png';

import AvatarStyles from '../styles/components/AvatarStyles';

const Avatar = () => {
  const [jump, setJump] = useState(false)

  const resetAnimation = () => {
    const el = document.querySelector('.flip-coin');
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
      className={`flip-coin ${jump ? 'jump' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setJump(false)}
    >
      <img
        className='flip-front'
        src={profilePic}
        alt='profile pic'
      />
    </AvatarStyles>
  )
}

export default Avatar;