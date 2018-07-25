import { FETCH_NOTES,
    GET_NOTE,
    ADD_NOTE, 
    UPDATE_NOTE, 
    FETCHING,  
    DELETE_NOTE, 
    ERROR, 
    SEARCH } from '../actions/actiontypes';
    
    const initialState = {
      notes: [],
      loading: true,
      note: {},
      error: null,
      query: ''
    };
    
    export default (state = initialState, action) => {
      switch (action.type) {
        case FETCH_NOTES:
          return {...state,
            notes: action.payload,
            loading: false,
            error: null,
            query: ''
        };
        case FETCHING:
        return { ...state, loading: true, error: null };
        case ADD_NOTE:
          return {...state,
            note: action.payload,
            loading: false,
            error: null,
            query: ''
        };
        case GET_NOTE:
          return {...state,
            note: action.payload,
            loading: false,
            error: null,
            query: ''
        };
        case DELETE_NOTE:
          return { ...state,
            loading: false,
            error: null,
            note: {},
            query: ''
        };
        case UPDATE_NOTE:
        return {
          ...state,
          note: action.payload,
          loading: false,
          error: null,
          query: ''
        };
        case ERROR:
          return { ...state, error: action.payload, loading: false, query: '' }
        case SEARCH:
        // need to do some googling
            return {};
        default:
          return state;
      }
    };