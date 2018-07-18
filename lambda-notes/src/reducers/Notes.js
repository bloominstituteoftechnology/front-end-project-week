import { FETCHING, FETCHED, SAVING, SAVED, UPDATING, UPDATED, DELETING, DELETED, ERROR } from '../actions';

const initialState = {
  notes: [],
  fetching: false,
  fetched: false,
  saving: false,
  saved: false,
  updating: false,
  updated: false,
  deleting: false,
  deleted: false,
  error: null
};

const notesReducer = (state = initialState, action) => {
  switch (action.type) {
      case FETCHING:
          return Object.assign({}, state, {
              fetching: !state.fetching
          });
      case FETCHED:
          return Object.assign({}, state, {
              fetching: !state.fetching,
              fetched: !state.fetched,
              notes: action.payload
          });
      case SAVING:
          return Object.assign({}, state, {
              saving: !state.saving
          });
      case SAVED:
          return Object.assign({}, state, {
              saving: !state.saving,
              saved: !state.saved,
              notes: action.payload
          });
      case DELETING:
          return Object.assign({}, state, {
              deleting: !state.deleting
          });
      case DELETED:
          return Object.assign({}, state, {
              deleting: !state.deleting,
              deleted: !state.deleted,
              notes: action.payload
          });
      case UPDATING:
          return Object.assign({}, state, {
              updating: !state.updating
          });
      case UPDATED:
          return Object.assign({}, state, {
              updating: !state.updating,
              updated: !state.updated,
              notes: action.payload
          });
      case ERROR:
          return Object.assign({}, state, {
              error: action.payload
          });
      default:
          return state;
  }
};

export default notesReducer;
