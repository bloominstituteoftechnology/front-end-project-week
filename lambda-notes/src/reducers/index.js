import { combineReducers } from 'redux';

import { START_FETCH, RECEIVE_NOTES } from '../actions/index.js';

const byIdReducer = (state={}, action) => {
  switch (action.type) {
    case RECEIVE_NOTES:
      const { payload } = action;
      return payload.reduce((accum, note) => ({...accum, [note._id]: note }), {});
    default: 
      return state;
  }
};

const allIdsReducer = (state=[], action) => {
  switch (action.type) {
    case RECEIVE_NOTES:
      const { payload } = action;
      return payload.map(note => note._id);
    default:
      return state;
  }
}

export default combineReducers({byId: byIdReducer, allIds: allIdsReducer});

export const getAllNotes = state => state.allIds.map(id => state.byId[id]);