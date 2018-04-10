export const LOGIN = 'LOGIN';

export const login = data => {
  return {
    type: LOGIN,
    payload: data,
  };
};
