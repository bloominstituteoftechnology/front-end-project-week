import {
  USER_AUTHENTICATED,
  USER_UNAUTHENTICATED,
  AUTHENTICATION_ERROR,
  CHECK_IF_AUTHENTICATED
} from "../actions";

export default (state = { authed: false }, action) => {
  switch (action.type) {
    case USER_AUTHENTICATED:
      return { ...state, authed: true };
    case USER_UNAUTHENTICATED:
      return { ...state, authed: false };
    case AUTHENTICATION_ERROR:
      return { ...state, error: action.payload };
    case CHECK_IF_AUTHENTICATED:
      return { ...state };
    default:
      return state;
  }
};
