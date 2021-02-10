import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {useParams} from 'react-router-dom'
import MyPostsContainer from '../../containers/Profile/MyPosts/MyPostsContainer';
import { fetchProfile } from '../../redux/actions/profileActions';
import ProfileInfo from './ProfileInfo/ProfileInfo'

import classes from './Profile.module.css'

const Profile = () => {
  const user = useSelector(state => state.profile)
  const dispatch = useDispatch()
  const {uid} = useParams()

  useEffect(() => {
    if (uid) {
      dispatch(fetchProfile(uid))
    }
  }, [uid])

  return (
    <div className={classes.profile}>
      <div className={classes.content}>
        <ProfileInfo {...user}/>
        <MyPostsContainer />
      </div>
    </div>
  )
}

export default Profile
