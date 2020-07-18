import React from 'react';
import AvatarFlip from './AvatarFlip';
import Description from './Description';

import ProfileStyles from '../styles/components/ProfileStyles';

const Profile = () => {

  return (
    <ProfileStyles>

      <div className='profile-intro'>
        <AvatarFlip />
        <Description />
      </div>

    </ProfileStyles>
  )
}


export default Profile;