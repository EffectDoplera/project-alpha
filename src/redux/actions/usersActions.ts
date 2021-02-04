import { User } from '../../types/user';

export enum UsersActions {
  USERS_REQUEST = 'USERS_REQUEST',
  USERS_SUCCESS = 'USERS_SUCCESS',
  USERS_FAILURE = 'USERS_FAILURE',
  FOLLOW = 'FOLLOW',
  UNFOLLOW = 'UNFOLLOW',
}

export const fetchUsers = () => ({ type: UsersActions.USERS_REQUEST });
export const fetchUsersSuccess = (users: User[]) => ({ type: UsersActions.USERS_SUCCESS, users });
export const fetchUsersFailure = (error: Error) => ({ type: UsersActions.USERS_FAILURE, error: error.message });
export const follow = (userId: string) => ({ type: UsersActions.FOLLOW, userId });
export const unfollow = (userId: string) => ({ type: UsersActions.UNFOLLOW, userId });
