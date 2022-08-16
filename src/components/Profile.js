import React from 'react'
import defaultProfile from '../img/default.png'
import { useSelector } from 'react-redux'

function Profile() {

    const profilePic = useSelector(state => state.profileImg);
    const profileInfo = useSelector(state => state.profileInfo);

  return (
    <div className='profile'>
        <h3>{profileInfo.first} {profileInfo.last}</h3>

        <div className="profile-img">
            <img src={profilePic} alt="user profile" />
        </div>
    </div>
  )
}

export default Profile