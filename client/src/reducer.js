import { combineReducers } from 'redux';

import { REQUEST_ALL_NOTES, RECEIVE_ALL_NOTES, ERROR } from './components/actions/index';
import { ADD_NEW_NOTE, PREVIEW_NEW_NOTE } from './components/AddNote/actions/index';

const defaultState = {
  isFetching: false,
  notes: [],
  newNote: {}
};


export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_ALL_NOTES:
      return Object.assign({}, state, {isFetching: true});
    case RECEIVE_ALL_NOTES:
      return Object.assign({}, state, {isFetching: false, notes: action.notes})
    case ADD_NEW_NOTE:
      return state;
    case PREVIEW_NEW_NOTE:
      return Object.assign({}, state, { newNote: action.newNote });
    default:
      return state;
  }
}
