import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from 'antd';
import Post from './Post/Post';

import classes from './MyPosts.module.css';

const MyPosts = () => {
  const dispatch = useDispatch();
  debugger;
  const posts = useSelector((state) => state.dialogs.posts);

  const newPostElement = React.createRef();

  const addPost = () => {
    dispatch({ type: 'ADD_POST', payload: { message: newPostElement.current.value } });
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <textarea ref={newPostElement} name="post" id="post" cols="30" rows="10"></textarea>
      </div>
      <div>
        <Button onClick={addPost}>Add post</Button>
      </div>
      <div className={classes.posts}>
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
