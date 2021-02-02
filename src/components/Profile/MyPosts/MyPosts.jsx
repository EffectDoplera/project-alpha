import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input } from 'antd';
import Post from './Post/Post';

import classes from './MyPosts.module.css';

const { TextArea } = Input;

const MyPosts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.profile.posts);

  const newPostElement = React.createRef();

  const addPost = () => {
    dispatch({ type: 'ADD_POST', payload: { message: newPostElement.current.value } });
  };

  return (
    <div className={classes.postsBlock}>
      <h3>My posts</h3>
      <div>
        <TextArea showCount maxLength={280} ref={newPostElement} name="post" id="post" cols="30" rows="10"></TextArea>
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
