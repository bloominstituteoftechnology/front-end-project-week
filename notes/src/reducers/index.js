
import {
  FETCH_NOTES_START,
  FETCH_NOTES_SUCCESS,
  FETCH_NOTES_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  UPDATE_NOTE_START,
  UPDATE_NOTE_SUCCESS,
  UPDATE_NOTE_FAILURE,
  DELETE_NOTE_START,
  DELETE_NOTE_SUCCESS,
  DELETE_NOTE_FAILURE,
  FETCH_NOTE_START,
  FETCH_NOTE_SUCCESS,
  FETCH_NOTE_FAILURE,
  CHANGE_CURRENT_VIEW,
  START_CHANGE_VIEW
//add delete note stuff and update note stuff
} from '../actions';

const initState = {
  notes: [],
  fetchingNote: false,
  fetchingNotes: true,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null,
  currentView: "notes",
  confirmingDelete: false,
  note: null
}

const reducer = (state = initState, action) => {
  switch (action.type){
    //change view
    case CHANGE_CURRENT_VIEW:
      return {
        ...state,
        currentView: action.payload.currentView,
        note: action.payload.note,
        changingView: false,
        error: null
      };
    case START_CHANGE_VIEW:
      return {
        ...state,
        currentView: action.payload,
        changingView: true,
        error: null
      };


    //refresh list of all notes
    case FETCH_NOTES_START:
      return {
        ...state,
        fetchingNotes: true,
        error: null
      };
    case FETCH_NOTES_SUCCESS:
      return {
        ...state,
        notes: action.payload,
        fetchingNotes: false,
        currentView: "notes",
        error: null
      };
     case FETCH_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload,
        currentView: "notes"
      };

    //add note
    case ADD_NOTE_START:
      return {
        ...state,
        fetchingNotes: true,
        addingNote: true,
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNotes: true,
        addingNote: false,
        currentView: "notes"
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        fetchingNotes: true,
        addingNote: false,
        error: action.payload,
        currentView: "notes"
      };

    //get a specific note
    case FETCH_NOTE_START:
      return {
        ...state,
        fetchingNote: true,
      };
    case FETCH_NOTE_SUCCESS:
      return {
        ...state,
        fetchingNote: false,
        note: action.payload,
        currentView: "note"
      };
    case FETCH_NOTE_FAILURE:
      return {
        ...state,
        fetchingNote: false,
        error: action.payload,
        currentView: "notes"
      };

    //update a specific note
    case UPDATE_NOTE_START:
      return {
        ...state,
        updatingNote: true,
      };
    case UPDATE_NOTE_SUCCESS:
      return {
        ...state,
        updatingNote: false,
        currentView: "notes"
      };
    case UPDATE_NOTE_FAILURE:
      return {
        ...state,
        updatingNote: false,
        error: action.payload,
        currentView: "notes"
      };

    //delete a specific note
    case DELETE_NOTE_START:
      return {
        ...state,
        deletingNote: true,
      };
    case DELETE_NOTE_SUCCESS:
      return {
        ...state,
        deletingNote: false,
        currentView: "notes"
      };
    case DELETE_NOTE_FAILURE:
      return {
        ...state,
        deletingNote: false,
        error: action.payload,
        currentView: "notes"
      };


    default: 
      return state;
  }
};

export default reducer;
