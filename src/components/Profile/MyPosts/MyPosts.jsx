import React, { useContext } from 'react'
import { StateContext } from './../../../redux/StateContext'
import Post from './Post/Post'

import classes from './MyPosts.module.css'

const MyPosts = () => {
  const { posts } = useContext(StateContext)

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
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  )
}

export default MyPosts
