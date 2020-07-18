import React, { useState } from 'react';
import profilePic from '../images/profPic.png';

import AvatarFlipStyles from '../styles/components/AvatarFlipStyles';

const AvatarFlip = () => {
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
    <AvatarFlipStyles
      className={`flip-coin ${jump ? 'jump' : ''}`}
      onClick={handleClick}
      onAnimationEnd={() => setJump(false)}
    >
      <img
        className='flip-front'
        src={profilePic}
        alt='profile pic'
      />
    </AvatarFlipStyles>
  )
}

export default AvatarFlip;