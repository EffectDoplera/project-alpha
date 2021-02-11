import {Post} from '../../types/post';

export enum PostActions {
  POSTS_REQUEST = 'POSTS_REQUEST',
  POSTS_SUCCESS = 'POSTS_SUCCESS',
  POSTS_FAILURE = 'POSTS_FAILURE',
  ADD_POST = 'ADD_POST',
}

export const fetchPosts = () => ({type: PostActions.POSTS_REQUEST});
export const fetchPostsSuccess = (posts: Post[]) => ({
  type: PostActions.POSTS_SUCCESS,
  posts,
});
export const fetchPostsFailure = (error: Error) => ({
  type: PostActions.POSTS_FAILURE,
  error,
});
export const addPost = (post: Post) => ({type: PostActions.ADD_POST, post});
