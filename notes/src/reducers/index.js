

//== Reducer ===================================================================

//-- Dependencies --------------------------------
import * as actions from '../actions';

//-- Initial Store State -------------------------
const initialState = {
    notes: [],
    fetching: false,
    error: null,
};
  
//-- Route Actions -------------------------------
export default function (state = initialState, action){
    switch (action.type) {
        case actions.NOT_READY     : return handleNotReady  (state, action);
        case actions.FETCH_ERROR   : return handleFetchError(state, action);
        case actions.FETCHING      : return handleFetching  (state, action);
        case actions.NOTES_RESPONSE: return handleNotesList (state, action);
        default                    : return                  state         ;
    }
};

//-- Action Handling -----------------------------
function handleFetching(state, action) {
    return {
        ...state,
        fetching: true,
    };
}
function handleNotesList(state, action) {
    return {
        ...state,
        fetching: false,
        notes: action.notes,
        error: null,
    };
}
function handleFetchError(state, action) {
    return {
        ...state,
        fetching: false,
        error: action.error,
    };
}
function handleNotReady(state, action) {
    return {
        ...state,
        error: action.error,
    };
}
