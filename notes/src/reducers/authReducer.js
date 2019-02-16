import {
  REGISTER,
  SIGNIN,
  ERROR,
  SET_CURR_USER,
  LOGOUT
} from "../actions/authActions";

const initialState = {
  register: false,
  loggedin: false,
  error: "",
  user: {}
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case REGISTER:
      return Object.assign({}, state, {
        register: true,
        loggedIn: false,
        error: ""
      });
    case SIGNIN:
      return Object.assign({}, state, {
        register: false,
        loggedin: true,
        error: "",
        user: action.payload
      });
    case LOGOUT:
      return Object.assign({}, state, {
        register: false,
        loggedin: false,
        error: "",
        user: {}
      });
    case ERROR:
      return Object.assign({}, state, {
        register: false,
        loggedIn: false,
        error: action.payload
      });
    case SET_CURR_USER:
      return Object.assign({}, state, {
        register: false,
        loggedIn: true,
        user: action.payload
      });
    default:
      return state;
  }
};
