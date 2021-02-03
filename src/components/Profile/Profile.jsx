import React from 'react'
import MyPostsContainer from '../../containers/Profile/MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import classes from './Profile.module.css'

const Profile = () => {
  return (
    <div>
      <ProfileInfo />
      <MyPostsContainer />
    </div>
  )
}

export default Profile
