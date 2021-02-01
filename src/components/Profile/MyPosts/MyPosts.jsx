import React from 'react'
import Post from './Post/Post'

import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div>
      <h3>My posts</h3>
      <div>New post</div>
      <div>
        <Post message='Test1' />
        <Post message='Test2' />
        <Post message='Test3' />
      </div>
    </div>
  )
}

export default MyPosts
