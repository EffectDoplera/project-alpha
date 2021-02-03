import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import MyPosts from '../../../components/Profile/MyPosts/MyPosts';

const MyPostsContainer = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state:any) => state.profile.posts);

  const newPostElement:any = React.createRef();

  const addPost = () => dispatch({
    type: 'ADD_POST',
    payload: { message: newPostElement.current.resizableTextArea.props.value },
  });

  return (
    <MyPosts posts={posts} newPostElement={newPostElement} addPost={addPost}/>
  )
}

export default MyPostsContainer
