import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_USER,
  REGISTER_USER_SUCCESS,
  REGISTER_USER_FAILURE
} from '../actions';

const initialState = {
  isRegistering: false,
  isLoggingIn: false,
  message: '',
  error: null
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER_USER:
      return {
        ...state,
        isRegistering: true
      };
    case REGISTER_USER_SUCCESS:
      return {
        ...state,
        isRegistering: false,
        message: action.payload
      };
    case REGISTER_USER_FAILURE:
      return {
        ...state,
        isRegistering: false,
        error: action.payload,
        message: action.payload
      };
    case LOGIN:
      return {
        ...state,
        isLoggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoggingIn: false,
        message: action.payload
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoggingIn: false,
        error: action.payload,
        message: action.payload
      };
    default:
      return state;
  }
};
