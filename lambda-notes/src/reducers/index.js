/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  FETCHING_DATA,
  DATA_FETCHED,
  FETCH_ERROR,
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
};

export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_DATA:
      return { ...state, fetchingData: true };
    case DATA_FETCHED:
      return {
        ...state,
        notes: action.payload,
        fetchingData: false,
        dataFetched: true,
      };
    case FETCH_ERROR:
      return {
        ...state,
        error: 'Error fetching data',
      };
    case INITIALIZE_NOTE_ADD:
      return {
        ...state,
        addingNote: true,
      };
    case COMPLETE_NOTE_ADD:
      return {
        ...state,
        addingNote: false,
        notes: action.payload,
      };
    case ADD_NOTE_ERROR:
      return {
        ...state,
        error: 'Error adding note',
        addingNote: false,
      };
    default:
      return state;
  }
  
};