import {
  ADDING_NOTE,
  NOTE_ADDED,
  UPDATING_NOTE,
  NOTE_UPDATED,
  DELETING,
  DELETED,
  FETCHED,
  FETCHING,
  SINGLE_FETCHED,
  FETCHING_SINGLE,
  ERROR,
  SEARCH,
  REGISTERING_USER,
  REGISTERED_USER

  //  SORT_CHARACTERS,
  // SORT_CONTENT
} from "../actions";

const initialState = {
  notes: [],
  registeringUser: false,
  fetchingNotes: false,
  fethingNote: false,
  addingNote: false,
  updatingNote: false,
  deletingNote: false,
  error: null,
  note: {}
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return { ...state, fetchingNotes: true };

    case FETCHED:
      return { ...state, fetchingNotes: false, notes: action.payload };

    case FETCHING_SINGLE:
      return { ...state, fetchingNote: true };

    case SINGLE_FETCHED:
      return { ...state, fetchedNote: true, note: action.payload };

    case ADDING_NOTE:
      return { ...state, addingNote: true };

    case NOTE_ADDED:
      return {
        ...state,
        addingNote: false,
        notes: [...state.notes, action.payload]
      };

    case UPDATING_NOTE:
      return { ...state, updatingNote: true };

    // when someone clicks 'save' and updates a NOTE

    case NOTE_UPDATED:
      const notes = state.notes.filter(n => n._id !== action.id);
      return { ...state, notes: [...notes, action.updatedNote] };

    /////////////////////////////////////

    case DELETING:
      return { ...state, deletingNote: true };

    case DELETED:
      return {
        ...state,
        deletingNote: false,
        note: {},
        notes: state.notes.filter(note => action.id !== note._id)
      };
    case SEARCH:
      const searchString = action.sString.target.value;
      if (!searchString || searchString === "")
        return {
          ...state,
          searchList: [],
          searching: false
        };
      else {
        const notes = state.notes.slice();
        return {
          ...state,
          searching: true,
          searchList: notes.filter(note => note.title.includes(searchString))
        };
      }
    case REGISTERING_USER:
      return {
        ...state,
        registeringUser: true
      };
    case REGISTERED_USER:
      return {
        ...state,
        registeringUser: false
      }; 
    case ERROR:
      return { ...state, error: action.payload, fetchingNotes: false };

    // case SORT_CHARACTERS: {
    //   const note = state.note.slice().sort((a, b) => a.title[0] > b.title[0]);
    //   return {
    //     ...state,
    //     notes: notes
    //   };
    // }
    // case SORT_CONTENT:
    //   const notes = state.notes
    //     .slice()
    //     .sort((a, b) => a.textBody.length > b.textBody.length);
    //   return {
    //     ...state,
    //     notes: notes
    //   };

    default:
      return state;
  }
};

export default rootReducer;
