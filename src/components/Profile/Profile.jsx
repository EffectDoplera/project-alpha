import React from 'react'
import MyPosts from './MyPosts/MyPosts'
import classes from './Profile.module.css'

const Profile = () => {
  return (
    <>
      <div>
        <img
          src='https://helpx.adobe.com/content/dam/help/en/photoshop/using/convert-color-image-black-white/jcr_content/main-pars/before_and_after/image-before/Landscape-Color.jpg'
          alt='intro'
        />
      </div>
      <div>ava + desc</div>
      <MyPosts />
    </>
  )
}

export default Profile
