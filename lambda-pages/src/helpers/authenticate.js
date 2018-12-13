export const authenticate = (request, id) => {
  const token = localStorage.getItem('auth_token');
  const options = {
    headers: {
      authentication: token
    }
  };
  if (token && id) {
    request(id, options);
  } else {
    request(options);
  }
};
