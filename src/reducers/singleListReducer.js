import * as actionTypes from '../actions/listsActions';

const initialState = {
  listSelected: {},
  //showUpdate: false,
  deletingList: false,
  gettingSingleList: false,
};

export const singleListReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DELETING_LIST:
      return { ...state, deletingList: true };
    case actionTypes.DELETE_LIST:
      return { ...state, listSelected: action.payload, deletingList: false };
    case actionTypes.SINGLE_LIST:
      return { ...state, listSelected: action.payload, gettingSingleList: false };
    case actionTypes.GETTING_SINGLE_LIST:
      return { ...state, gettingSingleList: true };
    case actionTypes.UPDATING_LIST:
      return { ...state, updatingList: true };
    case actionTypes.UPDATE_LIST:
      return { ...state, lists: action.payload, updatingList: false };
    case actionTypes.ERROR:
      return {
        ...state,
        deletingList: false,
        gettingSingleList: false,
        error: action.payload
      };
    default:
      return state;
  }
};