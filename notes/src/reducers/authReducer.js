import { LOG_IN } from '../actions';

const initialState = {
  users: [{ username: 'ckirkwood94', password: 'abc', firstName: 'Caleb' }],
  isLoggedIn: true,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      console.log(
        'LOG_IN',
        state.users.find(
          (user) =>
            user.username === action.username &&
            user.password === action.password
        )
      );
      if (
        state.users.find((user) => {
          return (
            user.username === action.username &&
            user.password === action.password
          );
        })
      ) {
        return {
          ...state,
          isLoggedIn: true,
        };
      } else
        return {
          ...state,
          isLoggedIn: false,
        };
    default:
      return state;
  }
};
