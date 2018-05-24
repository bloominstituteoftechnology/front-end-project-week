import { FETCHING_NOTES, FETCHED_NOTES, START_CREATE, GO_TO_LIST, VIEW_NOTE, START_DELETE, SAVE_NEW, DONE_SAVING, REALLY_DELETE, DONE_DELETING, CANCEL_DELETE, EDIT_NOTE, SAVE_EDIT, ALPHABETIZE_NOTES, ERROR, SHORTEST_NOTES, LONGEST_NOTES } from '../actions';

const initialState = {
  notes: [],
  appState: "list",
  viewId: null,
  error: null
};

const noteReducer = (state = initialState, action) => {
  let sortedNotes;
  switch (action.type) {
    case SAVE_NEW:
    case SAVE_EDIT:
    case FETCHING_NOTES:
    case REALLY_DELETE:
    case DONE_SAVING:
    case DONE_DELETING:
      return Object.assign({}, state, {appState: "fetching", error: null});
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
    case CANCEL_DELETE:
      return Object.assign({}, state, {appState: "view"});
    case EDIT_NOTE:
      return Object.assign({}, state, {appState: "edit"});
    case ERROR:
      return Object.assign({}, state, {appState: "error", error: action.payload});
    case ALPHABETIZE_NOTES:
      sortedNotes = state.notes.slice(0).sort((a, b) => a.title.localeCompare(b.title));
      return Object.assign({}, state, {notes: sortedNotes});
    case SHORTEST_NOTES:
      sortedNotes = state.notes.slice(0).sort((a, b) => a.textBody.length - b.textBody.length);
      return Object.assign({}, state, {notes: sortedNotes});
    case LONGEST_NOTES:
      sortedNotes = state.notes.slice(0).sort((a, b) => b.textBody.length - a.textBody.length);
      return Object.assign({}, state, {notes: sortedNotes});
    default:
      return state;
  }
};

export default noteReducer;
