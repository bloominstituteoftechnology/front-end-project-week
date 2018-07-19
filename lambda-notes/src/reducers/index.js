import { combineReducers } from 'redux';

import { RECEIVE_NOTES, RECEIVE_NOTE, REARRANGE_NOTES, } from '../actions/index.js';

const byIdReducer = (state = {}, action) => {
  switch (action.type) {
  case RECEIVE_NOTES:
    const { payload } = action;
    return payload.reduce(
      (accum, note) => ({ ...accum, [note._id]: note }),
      {}
    );
  case RECEIVE_NOTE: {
    const { payload: note } = action;
    return { ...state, [note._id]: note };
  }
  default:
    return state;
  }
};

const allIdsReducer = (state = [], action) => {
  switch (action.type) {
  case RECEIVE_NOTES:
    const { payload } = action;
    return payload.map(note => note._id);
  case RECEIVE_NOTE: {
    const { _id: id } = action.payload;
    if (state.indexOf(id) === -1) {
      return [...state, id];
    }
    return state;
  }
  case REARRANGE_NOTES: {
    const { sourceId, dropId } = action.payload;

    // Remove source id from allIds array
    let newArr = state.filter( id => id !== sourceId );

    // Place source id after target id in allIds array.
    const targetIndex = state.findIndex(id => id === dropId);
    return [...newArr.slice(0, targetIndex), sourceId, ...newArr.slice(targetIndex)];
  }
  default:
    return state;
  }
};

export default combineReducers({ byId: byIdReducer, allIds: allIdsReducer });

export const getAllNotes = state => state.allIds.map(id => state.byId[id]);
export const getAllIds = state => state.allIds;
export const getNoteById = (state, id) =>
  state.byId[id] || { textBody: '', title: '', tags: [] };