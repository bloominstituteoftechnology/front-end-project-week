import {
  FETCHING_NOTES_START,
  FETCHING_NOTES_SUCCESS,
  FETCHING_NOTES_FAILURE,
  ADD_NOTE_START,
  ADD_NOTE_SUCCESS,
  ADD_NOTE_FAILURE,
  // FETCHING_NOTE_START,
  // FETCHING_NOTE_SUCCESS,
  // FETCHING_NOTE_FAILURE
} from "../Actions";

const initialState = {
  notes: [],
  fetchingNotes: false,
  addingNote: false,
  // fetchNote: false,
  error: null
};

const reducers = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES_START:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCHING_NOTES_SUCCESS:
      return {
        ...state,
        error: null,
        fetchingNotes: false,
        notes: action.payload
      };
    case FETCHING_NOTES_FAILURE:
      return {
        ...state,
        fetchingNotes: false,
        error: action.payload
      };
    case ADD_NOTE_START:
      return {
        ...state,
        addingNote: true
      };
    case ADD_NOTE_SUCCESS:
      return {
        ...state,
        addingNote: false,
        error: null,
        notes: [...state.notes, action.payload]
      };
    case ADD_NOTE_FAILURE:
      return {
        ...state,
        addingNote: false,
        error: action.payload
      };

    default:
      return state;
  }
};

export default reducers;
