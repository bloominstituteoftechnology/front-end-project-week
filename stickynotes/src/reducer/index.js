import {
    REQUEST_SENT,
    REQUEST_ERROR,
    REQUEST_SUCCESS,
    ADD,
    UPDATE,
    DELETE,
     SORT,
     SEARCH
  } from '../actions'

  const initialState = {
    notes: [],
    error: null,
   requestingData: false,
   newId: '',
   newNote: [],
  }

  export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case REQUEST_SENT:
          return {
            ...state,
            requestingData: true
        };
        case REQUEST_ERROR:
          return {
            ...state,
            requestingData: false,
            error: action.payload
        };
        case REQUEST_SUCCESS:
          return {
            ...state,
            error: null,
            requestingData: false,
            notes: action.payload
        };
        case ADD: 
          return {
            ...state,
            error:null,
            requestingData: false,
            newId: action.id,
            notes: [...state.notes]
            
        };
        case UPDATE:
          return {
            ...state,
            error:null,
            requestingData: false,
            notes: [...state.notes]
        };
        case DELETE:
          return {
            ...state,
            error:null,
            requestingData: false,
            notes: [...state.notes]
        };
        case SORT: 
        return {
          ...state,
          notes: state.notes.slice().sort(action.payload),
        };
        case SEARCH:
        return {
          ...state,
          notes: state.notes.slice().filter(note => note.title.includes(action.payload) )
        }
    
        default:
          return state;
      }
    };
    
