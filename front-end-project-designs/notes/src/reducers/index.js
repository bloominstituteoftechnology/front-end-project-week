import {
    ADD_NOTE,
    EDIT_NOTE,
    DELETE_NOTE,
    FETCHING_NOTES,
    NOTES_FETCHED,
    NOTES_FETCH_FAIL
} from './actions';
const initialState={
    selected=false,
    notes=[],
    erorr: null
    
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_NOTES:
            return { ...state };
        case NOTES_FETCHED:
            return {
              ...state,
              notes: [...state.notes, ...action.payload]
            };
        case NOTES_FETCH_FAIL :
            return { ...state, error: action.payload };
        default:
            return state;
        }
      };
export default rootReducer;