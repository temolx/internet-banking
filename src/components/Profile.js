import React from 'react'
import defaultProfile from '../img/default.png'
import { useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom';

function Profile() {

    const profilePic = useSelector(state => state.profileImg);
    const profileInfo = useSelector(state => state.profileInfo);

    const location = useLocation();

  if (location.pathname !== '/') {
    return (
      <div className='profile'>
          <h3>{profileInfo.first} {profileInfo.last}</h3>

          <Link to='/profile'><div className="profile-img">
              <img src={profilePic !== '' ? profilePic : defaultProfile} alt="user profile" />
          </div></Link>
      </div>
    )
  }
}

export default Profile