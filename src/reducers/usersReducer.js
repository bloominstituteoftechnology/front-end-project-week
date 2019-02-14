import * as actionTypes from '../actions/usersActions.js';

const initialState = {
  users: [],
  gettingUsers: false,
  updatingUser: false,
  creatingUser: false,
  deletingUser: false,
  error: null
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_USERS:
      return { ...state, gettingUsers: true };
    case actionTypes.GET_USERS:
      return { ...state, users: action.payload, gettingUsers: false };
    case actionTypes.UPDATING_USER:
      return { ...state, updatingUser: true };
    case actionTypes.UPDATE_USER:
      return { ...state, users: action.payload, updatingUser: false };
    case actionTypes.CREATING_USER:
      return { ...state, creatingUser: true };
    case actionTypes.CREATE_USER:
      return { ...state, users: action.payload, creatingUser: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingUsers: false,
        creatingUser: false,
        deletingUser: false,
        updatingUser: false,
        error: action.payload
      };
    default:
      return state;
  }
};