import { REGISTER, SIGNIN, ERROR } from "../actions/authActions";

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
        login: false,
        error: ""
      });
    case SIGNIN:
      return Object.assign({}, state, {
        register: false,
        loggedin: true,
        error: "",
        user: action.payload
      });
    case ERROR:
      return Object.assign({}, state, {
        register: false,
        login: false,
        error: action.payload
      });
    default:
      return state;
  }
};
