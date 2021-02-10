import { PostActions } from '../redux/actions/postActions';
import { ProfileActions } from '../redux/actions/profileActions';
import { Post } from '../types/post';

export interface IProfileState {
  readonly id: string,
  readonly createdAt: string,
  readonly firstName: string,
  readonly surname: string,
  readonly status: string,
  readonly avatarUrl: string,
  readonly introUrl: string,
  readonly posts: Post[]
}

const initialState: IProfileState = {
  id: '',
  createdAt: '',
  firstName: '',
  surname: '',
  status: '',
  avatarUrl: '',
  introUrl: '',
  posts: [],
};

const profileReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case PostActions.ADD_POST:
      return { ...state, posts: [ ...state.posts, action.post ] };
    case PostActions.POSTS_REQUEST:
      return { ...state };
    case PostActions.POSTS_SUCCESS:
      return { ...state, posts: [ ...state.posts, ...action.posts ] };
    case PostActions.POSTS_FAILURE:
      return { ...state };
    case ProfileActions.PROFILE_REQUEST:
      return { ...state };
    case ProfileActions.PROFILE_SUCCESS:
      return { ...action.profile };
    case ProfileActions.PROFILE_FAILURE:
      return { ...state };
    default:
      return state;
  }
};

export default profileReducer;
