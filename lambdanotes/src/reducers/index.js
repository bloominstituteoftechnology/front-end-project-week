import {
    NOTE_FETCHING_DATA,
    NOTE_DATA_FETCHED,
    NOTE_FETCH_ERROR,
    VIEWING_NOTE,
    VIEWED_NOTE,
    INITIALIZE_NOTE_ADD,
    COMPLETE_NOTE_ADD,
    ADD_NOTE_ERROR,
  } from '../actions';
  
  const initialState = {
    notes: [],
    fetchingData: false,
    dataFetched: false,
    addingNote: false,
    error: '',
    note: [],
  };
  
  export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
      case NOTE_FETCHING_DATA:
        return { ...state, fetchingData: true };
  
      case NOTE_DATA_FETCHED:
        return { ...state, notes: action.payload, fetchingData: false, dataFetched: true, };
  
      case NOTE_FETCH_ERROR:
        return { ...state, error: 'Error fetching data', };
  
      case INITIALIZE_NOTE_ADD:
        return { ...state, addingNote: true, };
  
      case COMPLETE_NOTE_ADD:
        return { ...state, addingNote: false, note: action.payload, };
  
      case ADD_NOTE_ERROR:
        return { ...state, error: 'Error adding note', addingNote: false, };
  
      case VIEWING_NOTE:
        return {
          ...state,
          viewingNote: true
        }
      case VIEWED_NOTE:
        return {
          ...state,
          viewingNote: false,
          note: action.payload
        }
      default:
        return state;
  
    }
  
  };
  
  