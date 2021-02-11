const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

const initialState = {
  users: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: true } : u)) };
    case UNFOLLOW:
      return { ...state, users: state.users.map((u) => (u.id === action.userId ? { ...u, followed: false } : u)) };
    case SET_USERS:
      return { ...state, users: [...state.users, ...action.users] };
    default:
      return state;
  }
};

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });

export default usersReducer;
