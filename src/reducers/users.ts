import {UsersActions} from '../redux/actions/usersActions';
import {User} from '../types/user';

export interface IUsersState {
  readonly users: User[];
  readonly isLoading: boolean;
  readonly error: string;
}

const initialState: IUsersState = {
  users: [],
  isLoading: false,
  error: '',
};

const usersReducer = (state = initialState, action: any): IUsersState => {
  switch (action.type) {
    case UsersActions.FOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? {...u, followed: true} : u
        ),
      };
    case UsersActions.UNFOLLOW:
      return {
        ...state,
        users: state.users.map((u) =>
          u.id === action.userId ? {...u, followed: false} : u
        ),
      };
    case UsersActions.USERS_REQUEST:
      return {...state, isLoading: true};
    case UsersActions.USERS_SUCCESS:
      return {...state, isLoading: false, users: [...action.users]};
    case UsersActions.USERS_FAILURE:
      return {...state, isLoading: false, error: action.error};
    default:
      return state;
  }
};

export default usersReducer;
