import {
    USER_AUTHENTICATED,
    USER_UNAUTHENTICATED,
    AUTHENTICATION_ERROR,
    CHECK_IF_AUTHENTICATED,
  } from '../actions';
  
  export default (auth = {}, action) => {
    switch (action.type) {
      case USER_AUTHENTICATED:
        return { ...auth, authed: true };
      case USER_UNAUTHENTICATED:
        return { ...auth, authed: false };
      case AUTHENTICATION_ERROR:
        return { ...auth, error: action.payload };
      case CHECK_IF_AUTHENTICATED:
        return { ...auth };
      default:
        return auth;
    }
  };
  