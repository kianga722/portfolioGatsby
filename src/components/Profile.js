import React from 'react';
import Intro from './Intro';
import AboutMe from './AboutMe';

import ProfileStyles from '../styles/components/ProfileStyles';

const Profile = () => {

  return (
    <ProfileStyles
      className='profile'
    >
      <Intro />
      <AboutMe />
    </ProfileStyles>
  )
}


export default Profile;