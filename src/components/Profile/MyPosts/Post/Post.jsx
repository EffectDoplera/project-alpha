import { Avatar } from 'antd'
import { UserOutlined } from '@ant-design/icons'
import React from 'react'
import classes from './Post.module.css'

const Post = ({ message }) => {
  return (
    <div className={classes.post}>
      <Avatar size={64} icon={<UserOutlined />} />
      <span>{message}</span>
    </div>
  )
}

export default Post
