export const CREATE_USER = 'CREATE_USER';

export const createUser = data => {
  return {
    type: CREATE_USER,
    payload: data,
  };
};
