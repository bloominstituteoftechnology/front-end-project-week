// import actions
import {ADDNOTE, EDITNOTE, DELETENOTE, FETCHING, FETCHED, ERROR, SAVING_NOTE, NOTE_SAVED,} from '../actions/index';

const initialState = {
  fetchingNotes: false,
  notesFetched: false,
  notesSaved: false,
  savingNotes: false,
  // updatingNote: false,
  // noteUpdated: false,
  // deletingNote: false,
  noteDeleted: false,
  notes: [],
  error: null
}

export default (state = initialState, action) => {
  switch(action.type) {
    case FETCHING:
      return Object.assign({}, state, {fetchingNotes: true});
    case FETCHED:
      return Object.assign({}, state, {fetchingNotes: false, notesFetched: true,
        notes: action.notes});//state.notes.concat(action.notes) causes to not refresh/update when deleting
    case SAVING_NOTE:
      return Object.assign({}, state, {savingNotes: true});
    case NOTE_SAVED:    
      return Object.assign({}, state, {savingnotes: false, notesSaved: true,
        notesFetched: true, notes: action.notes});
    // case NOTEDELETED:
    //     return Object.assign({}, state, {noteDeleted: true,
    //       notesFetched: true, notes: action.notes});
    case ERROR:
      return Object.assign({}, state, { fetchingNotes: false, error: action.error});
    default:
      return state;
  }
}