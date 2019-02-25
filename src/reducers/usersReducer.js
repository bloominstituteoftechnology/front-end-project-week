import * as actionTypes from '../actions/usersActions';

const initialState = {
  users: [],
  loggingUser: false,
  updatingUser: false,
  registeringUser: false,
 /*  deletingUser: false, */
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOGGING_USER:
      return { ...state, loggingUser: true };
    case actionTypes.LOGIN_USER:
      return { ...state, users: action.payload, loggingUser: false };
    case actionTypes.UPDATING_USER:
      return { ...state, updatingUser: true };
    case actionTypes.UPDATE_USER:
      return { ...state, users: action.payload, updatingUser: false };
    case actionTypes.REGISTERING_USER:
      return { ...state, registeringUser: true };
    case actionTypes.REGISTER_USER:
      return { ...state, users: action.payload, registeringUser: false };
    case actionTypes.ERROR:
      return {
        ...state,
        loggingUser: false,
        registeringUser: false,
       /*  deletingUser: false, */
        updatingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};