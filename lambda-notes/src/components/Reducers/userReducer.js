import {
  LOGIN,
  LOGOUT,
  ERROR,
} from '../Actions';

const initialState = {
  user: null,
  error: null,
}

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        user: action.payload,
      };
    case LOGOUT:
      return {
        ...state,
        user: null,
      }
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
}