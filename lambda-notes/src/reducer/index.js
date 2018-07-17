import {FETCHING, FETCHED, DELETING, DELETED, ERROR, SAVING_NOTE, NOTE_SAVED, FETCHED_SINGLE_NOTE} from "../actions";



const initialState = {
   notes: [],
   singleNote: [],
   fetchingNotes: false,
   addingNote: false,
   deletingNote: false,
   noteDeleted: false,	
   error: null
};

const noteReducer = (state=initialState, action) => {

	switch(action.type){
        case FETCHING:
        return Object.assign({}, state, {fetchingNotes: true, error: null});

        case FETCHED:
        return Object.assign({}, state, {fetchingNotes: false, notes: action.notes});

	case FETCHED_SINGLE_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, singleNote: action.note});

        case SAVING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: true, error: null});

        case NOTE_SAVED:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: false, error: null});
			
	case DELETING:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: false, deletingNote: true, noteDeleted: false, error: null});	

	case DELETED:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: false, deletingNote: false, noteDeleted: true, error: null});    

	case ERROR:
        return Object.assign({}, state, {error: true});
        
        default:
        return state;
        
}       
};

export default noteReducer;
