import { FETCHING_NOTES, FETCHED_NOTES, START_CREATE, GO_TO_LIST, VIEW_NOTE } from '../actions';

const initialState = {
  notes: [],
  appState: "list",
  viewId: null,
  newId: 4
};

const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return Object.assign({}, state, {appState: "fetching"});
    case FETCHED_NOTES:
      return Object.assign({}, state, {appState: "list", notes: action.payload});
    case START_CREATE:
      return Object.assign({}, state, {appState: "create", viewId: null});
    case GO_TO_LIST:
      return Object.assign({}, state, {appState: "list", viewId: null});
    case VIEW_NOTE:
      return Object.assign({}, state, {appState: "view", viewId: action.payload});
    default:
      return state;
  }
};

export default noteReducer;
