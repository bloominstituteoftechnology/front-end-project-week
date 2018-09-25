import {FETCHING, FETCHING_CREATE_PAGE, FETCHED,  EDITING_NOTE, NOTE_EDITED, DELETING, DELETED, ERROR, SAVING_NOTE, NOTE_SAVED, FETCHED_SINGLE_NOTE} from "../actions";



const initialState = {
   notes: [],
   singleNote: [],
   editedSingleNote: [],	
   fetchingNotes: false,
   addingNote: false,
   deletingNote: false,
   noteDeleted: false,
   noteSaved: false,
   noteEdited: false,
   fetchedSingleNote: false,	
   id:"",	
   error: null
};

const noteReducer = (state=initialState, action) => {

	switch(action.type){
        case FETCHING:
        return Object.assign({}, state, {fetchingNotes: true, noteDeleted: false, noteSaved: false, noteEdited: false, error: null, fetchedSingleNote: false});

        case FETCHED:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, noteDeleted: false, notes: action.notes, noteEdited: false, fetchedSingleNote: false});

	
	case FETCHING_CREATE_PAGE:
        return Object.assign({}, state, {fetchingNotes: false, noteDeleted: false, noteSaved: false, noteEdited: false, error: null, fetchedSingleNote: false});

	case FETCHED_SINGLE_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: false, noteSaved: false, fetchedSingleNote: true, singleNote: action.note, noteEdited: false, noteDeleted: false});

        case SAVING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, addingNote: true, noteSaved: false, error: null, noteEdited: false, fetchedSingleNote: false});

        case NOTE_SAVED:
        return Object.assign({}, state, {fetchingNotes: false, id: action.id, singleNote:"", noteSaved: true, addingNote: false, error: null, noteEdited: false, fetchedSingleNote: false});

	case EDITING_NOTE:
        return Object.assign({}, state, {fetchingNotes: false, noteSaved: false, addingNote: false, noteEdited: false, error: null, fetchedSingleNote: false});

	case NOTE_EDITED:
        return Object.assign({}, state, {editedSingleNote: action.note, fetchingNotes: false, noteSaved: false, addingNote: false, noteEdited: true, error: null, fetchedSingleNote: false});


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
