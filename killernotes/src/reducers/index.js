/* prettier-ignore */
import {FETCHING, FETCHED, ERROR, DELETING, DELETED, ADDING, ADDED, EDITING, NOTEDITING,
   EDITED, EXPORTING} from '../actions';

const initialState = {
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
      const newNotesArr = state.notes.filter(n => n._id !== action.payload);
      return { ...state, deletingNote: false, notes: newNotesArr };

    case ADDING:
      return { ...state, addingNote: true };

    case ADDED:
      // get info from the servers 'response'
      const newNoteID = action.payload.data.success;
      const newNoteResponse = JSON.parse(action.payload.config.data);
      const newNote = {
        tags: [],
        _id: newNoteID,
        title: newNoteResponse.title,
        textBody: newNoteResponse.textBody,
        __v: 0,
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
      const editedNote = action.payload.data;
      const editedId = editedNote._id;
      // get rid of the unedited note
      const newArr = state.notes.slice().filter(n => n._id !== editedId);
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

    case ERROR:
      return {
        ...state,
        fetchingNotes: false,
        fetchedNotes: false,
        error: action.payload.stack,
      };

    default:
      return state;
  }
};

export default rootReducer;
