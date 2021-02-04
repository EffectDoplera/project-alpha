import { Avatar, Image } from 'antd';
import React from 'react'

import classes from './ProfileInfo.module.css'
import intro from './../../../static/images/intro.jpg'

const ProfileInfo = () => {
  return (
    <div className={classes.info}>
      <Image src={intro} preview={false}/>
      <div className={classes.bio}>
        <Avatar size={80} />
        <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium dolorem eveniet exercitationem illum molestiae neque omnis quae recusandae totam ut.</div>
      </div>
    </div>
  )
}

export default ProfileInfo
