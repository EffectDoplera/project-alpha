import { ADD_POST, UPDATE_NEW_POST_TEXT } from './../actions/posts';
import { generate } from 'shortid';

const initialState = {
  posts: [
    { id: generate(), message: 'Hi', likeCounts: 12 },
    { id: generate(), message: 'Lorem ipsum dolor sit amet.', likeCounts: 11 },
    { id: generate(), message: 'Lorem, ipsum.', likeCounts: 5 },
  ],
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return { ...state, posts: [...state.posts, action.payload] };
    case UPDATE_NEW_POST_TEXT:
      return { ...state };
    default:
      return state;
  }
};

export default profileReducer;
