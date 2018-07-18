import {FETCHING, FETCHED,  EDITING_NOTE, NOTE_EDITED, DELETING, DELETED, ERROR, SAVING_NOTE, NOTE_SAVED, FETCHED_SINGLE_NOTE} from "../actions";



const initialState = {
   notes: [],
   singleNote: [],
   fetchingNotes: false,
   addingNote: false,
   deletingNote: false,
   noteDeleted: false,
   noteSaved: false,
   noteEdited: false,	
   error: null
};

const noteReducer = (state=initialState, action) => {

	switch(action.type){
        case FETCHING:
        return Object.assign({}, state, {fetchingNotes: true, noteDeleted: false, noteSaved: false, noteEdited: false, error: null});

        case FETCHED:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, noteDeleted: false, notes: action.notes, noteEdited: false});

	case FETCHED_SINGLE_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, singleNote: action.note, noteEdited: false});

        case SAVING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: true, noteSaved: false, error: null, noteEdited: false});

        case NOTE_SAVED:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: true, addingNote: false, error: null, noteEdited: false});

	case EDITING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, addingNote: false, noteEdited: false, error: null});

	case NOTE_EDITED:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, addingNote: false, noteEdited: true, error: null});


	case DELETING:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false,addingNote: false, deletingNote: true, noteDeleted: false, error: null, noteEdited: false});	

	case DELETED:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, addingNote: false, deletingNote: false, noteDeleted: true, error: null, noteEdited: false});    

	case ERROR:
        return Object.assign({}, state, {error: true});
        
        default:
        return state;
        
}       
};

export default noteReducer;
