import { GET_ALL_NOTES, GET_ALL_SUCCESS, GET_ALL_FAILURE } from '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    notes: [],
    errors: null
}

export default (state = initialState, action) => {
    switch (action.type) {
        case GET_ALL_NOTES:
            return Object.assign({}, state, {
                fetchingNotes: true,
            })
        case GET_ALL_SUCCESS:
            return Object.assign({}, state, {
                fetchingNotes: false,
                notesFetched: true,
                notes: [...state.notes, action.payload]
            })
        case GET_ALL_FAILURE: 
            return Object.assign({}, state, {
                fetchingNotes: false,
                notesFetched: false,
                errors: [...state.errors, action.error]
            })
    
      default:
        return state;
    }
  };