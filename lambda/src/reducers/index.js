import {
  FETCHING_NOTES,
  FETCHED_NOTES,
  ADDING_NOTES,
  ADDED_NOTES,
  ERROR,
  FETCHING_NOTE,
  FETCHED_NOTE,
  UPDATING_NOTES,
  UPDATED_NOTES,
  SEARCH,
  SORT_CHARACTERS,
  SORT_CONTENT
} from '../actions';

const initialState = {
  notes: [],
  fetchingNotes: true,
  addingNotes: false,
  addedNotes: true,
  err: null,
  fetchingNote: true,
  fetchedNote: {},
  searchList: [],
  searching: false,
  initialOrder: []
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_NOTES:
      return {
        ...state,
        fetchingNotes: true
      };
    case FETCHED_NOTES:
      return {
        ...state,
        fetchingNotes: false,
        notes: action.payload,
        initialOrder: action.payload
      };
    case SEARCH:
      if (action.sString === '')
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
          searchList: notes.filter(note => note.title.includes(action.sString))
        };
      }
    case ADDING_NOTES:
      return {
        ...state,
        addingNotes: true
      };
    case ADDED_NOTES:
      return {
        ...state,
        addingNotes: false,
        addedNotes: true,
        notes: state.notes.push({
          ...action.data,
          _id: action.id
        })
      };
    case FETCHING_NOTE:
      return {
        ...state,
        fetchingNote: true
      };
    case FETCHED_NOTE:
      return {
        ...state,
        fetchedNote: action.payload,
        fetchingNote: false
      };
    case UPDATING_NOTES:
      return {
        ...state
      };
    case UPDATED_NOTES:
      return {
        ...state
      };
    case ERROR:
      return {
        ...state,
        err: action.err
      };
    case SORT_CHARACTERS: {
      const notes = state.notes.slice().sort((a, b) => a.title[0] > b.title[0]);
      return {
        ...state,
        notes: notes
      };
    }
    case SORT_CONTENT:
      const notes = state.notes
        .slice()
        .sort((a, b) => a.textBody.length > b.textBody.length);
      return {
        ...state,
        notes: notes
      };

    default:
      return state;
  }
};
