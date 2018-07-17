import {FETCHING, FETCHED, ERROR, SAVING_NOTE, NOTE_SAVED} from "../actions";



const initialState = {
   notes: [],
   fetchingNotes: false,
   addingNote: false,
   error: null
};

const noteReducer = (state=initialState, action) => {

	switch(action.type){
        case FETCHING:
        return Object.assign({}, state, {fetchingNotes: true, error: null});

        case FETCHED:
        return Object.assign({}, state, {fetchingNotes: false, notes: action.notes});

        case SAVING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: true, error: null});

        case NOTE_SAVED:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: false, error: null});

	case ERROR:
        return Object.assign({}, state, {error: true});
        
        default:
        return state;
        
}       
};

export default noteReducer;
