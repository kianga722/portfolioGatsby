import React from 'react';
import { FaEnvelopeSquare, FaGithub, FaLinkedin } from 'react-icons/fa';
import AvatarFlip from './AvatarFlip';
import NameDraw from './NameDraw';

import ProfileStyles from '../styles/components/ProfileStyles';

const Profile = () => {
  const handleDrawRestart = () => {
    const draw = document.querySelector('#AndrewKiang tspan');
    const eleClone = draw.cloneNode(true);
    draw.parentNode.replaceChild(eleClone, draw)
  }

  return (
    <ProfileStyles>

      <AvatarFlip />

      <h1 className='profile-name'>
        <NameDraw
          handleDrawRestart={handleDrawRestart}
        />
      </h1>

      <div className='profile-location'>
        <span>web developer</span> based in NYC
      </div>

      <ul className='profile-links'>
        <li>
          <a href='mailto:kianga722@gmail.com' className='email'>
            <FaEnvelopeSquare className='fa-icon' />
            Email
          </a>
        </li>
        <li>
          <a href='https://github.com/kianga722' target='_blank' rel='noopener noreferrer' className='github'>
            <FaGithub className='fa-icon' />
            GitHub
          </a>
        </li>  
        <li>
          <a href='https://www.linkedin.com/in/kianga' target='_blank' rel='noopener noreferrer' className='linkedin'>
            <FaLinkedin className='fa-icon fa-linkedin-square' />
            LinkedIn
          </a>
        </li>
      </ul>

    </ProfileStyles>
  )
}


export default Profile;