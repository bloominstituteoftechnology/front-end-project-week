import { FETCHING_NOTES, FETCHED_NOTES, START_CREATE } from '../actions';

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
      return Object.assign({}, state, {appState: "create"});
    default:
      return state;
  }
};

export default noteReducer;
