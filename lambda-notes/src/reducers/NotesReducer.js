import {
  FETCH_NOTES,
  FETCHED,
  ADD_NOTE,
  ADDED,
  UPDATE_NOTES,
  UPDATED,
  DELETE_NOTE,
  DELETED,
  ERROR
} from "../actions";
export const initialState = {
  fetchingNotes: false,
  creatingNote: false,
  updatingNote: false,
  deletingNote: false,
  notes: [
    {
      title: "Note Title",
      textBody: "Note Content"
    }
  ],
  error: null
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCHED:
      return {
        ...state,
        fetchingNotes: false,
        notes: [...action.payload]
      };
    case ADD_NOTE:
      return {
        ...state,
        creatingNote: true
      };
    // window.location.reload();
    case ADDED:
      return {
        ...state,
        creatingNote: false,
        notes: [...action.payload]
      };
    case UPDATE_NOTES:
      return {
        ...state,
        updatingNote: true
      };
    case UPDATED:
      return {
        ...state,
        updatingNote: false,
        notes: state.notes.map(note => {
          if (note._id === action.payload._id) {
            return action.payload;
          }
          return note;
        })
      };
    case DELETE_NOTE:
      // window.location.reload();
      return {
        ...state,
        deleteingNote: true
      };
    case DELETED:
      return {
        ...state,
        deleteingNote: false
      };

    case ERROR:
      return {
        ...state,
        error: null
      };

    default:
      return state;
  }
};
