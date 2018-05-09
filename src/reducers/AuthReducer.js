const initialAuth = {
  authenticated: false,
}

export default (auth = initialAuth, action) => {
  switch (action.type) {
    case 'LOADING':
      return { ...auth, loading: true };
    case 'USER_REGISTERED':
      return { ...auth, loading: false };
    case 'USER_AUTHENTICATED':
      return { ...auth, authenticated: true, loading: false };
    case 'USER_UNAUTHENTICATED':
      return { ...auth, authenticated: false, loading: false };
    case 'AUTHENTICATION_ERROR':
      return { ...auth, error: action.payload, loading: false };
    case 'CHECK_IF_AUTHENTICATED':
      return { ...auth };
    case 'RESET_AUTH_ERROR':
      return { ...auth, error: null };
    default:
      return auth;
  }
};
