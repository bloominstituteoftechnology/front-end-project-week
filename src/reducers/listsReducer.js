import * as actionTypes from '../actions/listsActions';

const initialState = {
  lists: [],
  gettingLists: false,
  updatingList: false,
  creatingList: false,
  deletingList: false,
  error: null
};

export const listsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.GETTING_LISTS:
      return { ...state, gettingLists: true };
    case actionTypes.GET_LISTS:
      return { ...state, lists: action.payload, gettingLists: false };
    case actionTypes.UPDATING_LIST:
      return { ...state, updatingList: true };
    case actionTypes.UPDATE_LIST:
      return { ...state, listSelected: action.payload, updatingList: false };
    case actionTypes.CREATING_LIST:
      return { ...state, creatingList: true };
    case actionTypes.CREATE_LIST:
      return { ...state,  noteSelected: action.payload, creatingList: false };
    case actionTypes.ERROR:
      return {
        ...state,
        gettingLists: false,
        creatingList: false,
        deletingList: false,
        updatingList: false,
        error: action.payload
      };
    default:
      return state;
  }
};