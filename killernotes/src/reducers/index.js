/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, DELETING, DELETED, ADDING, ADDED, EDITING, NOTEDITING,
   EDITED, EXPORTING, CLEARERROR, LOGGEDIN, NOTLOGGEDIN} from '../actions';

const initialState = {
  loggedIn: false,
  username: '',
  userId: null,
  fetchingNotes: false,
  fetchedNotes: false,
  deletingNote: false,
  deletedNote: false,
  editingNote: false,
  editedNote: false,
  addingNote: false,
  addedNote: false,
  exporting: false,
  notes: [],
  error: null,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingNotes: true };

    case LOGGEDIN:
      const username = action.payload.username;
      const userId = action.payload.id;
      return { ...state, loggedIn: true, username, userId };

    case FETCHED:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        fetchedNotes: true,
      };

    case DELETING:
      return { ...state, deletingNote: true };

    case DELETED:
      // have to update the array as server only sends 'success'
      const newNotesArr = state.notes.filter(n => n.id !== action.payload);
      return { ...state, deletingNote: false, notes: newNotesArr };

    case ADDING:
      return { ...state, addingNote: true };

    case ADDED:
      // get info from the servers 'response'
      const newNoteID = action.payload.data.success;
      const newNoteResponse = JSON.parse(action.payload.config.data);
      const newNote = {
        id: newNoteID,
        u_id: 1,
        title: newNoteResponse.title,
        content: newNoteResponse.content,
      };
      const notesArr = state.notes.slice();
      notesArr.push(newNote);
      return { ...state, addingNote: false, addedNote: true, notes: notesArr };

    case EDITING:
      return {
        ...state,
        editingNote: true,
      };

    case EDITED:
      // get info from the payload
      const editedNote = action.payload.data.success;
      const editedId = editedNote.id;
      // get rid of the unedited note
      const newArr = state.notes.slice().filter(n => +n.id !== +editedId);
      // add in the edited note
      newArr.push(editedNote);
      return {
        ...state,
        editingNote: false,
        editedNote: true,
        notes: newArr,
      };

    case NOTEDITING:
      return {
        ...state,
        editingNote: false,
      };

    case EXPORTING:
      return {
        ...state,
        exporting: false,
      };

    case NOTLOGGEDIN:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNotes: false,
      };

    case CLEARERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNotes: true,
        deletingNote: false,
        deletedNote: false,
        editingNote: false,
        editedNote: false,
        addingNote: false,
        addedNote: false,
        exporting: false,
        error: null,
      };

    case ERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNotes: false,
        error: action.payload.response.data.error || action.payload.stack,
      };

    default:
      return state;
  }
};

export default rootReducer;
