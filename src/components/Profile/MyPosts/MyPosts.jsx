import React from 'react';
import { Button, Input } from 'antd';
import Post from './Post/Post';

import classes from './MyPosts.module.css';

const { TextArea } = Input;

const MyPosts = ({posts, newPostElement, addPost}) =>
  (
    <div className={ classes.postsBlock }>
      <h3>My posts</h3>
      <div>
        <TextArea showCount maxLength={ 280 } ref={ newPostElement } name='post' id='post' cols='30' rows='10' />
      </div>
      <div>
        <Button onClick={ addPost }>Add post</Button>
      </div>
      <div className={ classes.posts }>
        { posts.map((post) => (
          <Post key={ post.id } { ...post } />
        )) }
      </div>
    </div>
  );

export default MyPosts;
