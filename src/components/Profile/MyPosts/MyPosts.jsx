import React from 'react'
import Post from './Post/Post'

import classes from './MyPosts.module.css'

const MyPosts = () => {
  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea name='post' id='post' cols='30' rows='10'></textarea>
      </div>
      <div>
        <button>Add post</button>
      </div>
      <div className={classes.posts}>
        <Post message='Test1' />
        <Post message='Test2' />
        <Post message='Test3' />
      </div>
    </div>
  )
}

export default MyPosts
