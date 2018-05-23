import { FETCHING_NOTES, FETCHED_NOTES, START_CREATE, GO_TO_LIST, VIEW_NOTE, START_DELETE, SAVE_NEW, DONE_SAVING, REALLY_DELETE, DONE_DELETING } from '../actions';

const initialState = {
  notes: [],
  appState: "list",
  viewId: null,
  newId: 4
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case SAVE_NEW:
    case FETCHING_NOTES:
    case REALLY_DELETE:
      return Object.assign({}, state, {appState: "fetching"});
    case FETCHED_NOTES:
      return Object.assign({}, state, {appState: "list", notes: action.payload});
    case START_CREATE:
      return Object.assign({}, state, {appState: "create", viewId: null});
    case GO_TO_LIST:
      return Object.assign({}, state, {appState: "list", viewId: null});
    case VIEW_NOTE:
      return Object.assign({}, state, {appState: "view", viewId: action.payload});
    case START_DELETE:
      return Object.assign({}, state, {appState: "deleting"});
    case DONE_SAVING:
    case DONE_DELETING:
      return Object.assign({}, state, {appState: "needsToFetch"});
    default:
      return state;
  }
};

export default noteReducer;
