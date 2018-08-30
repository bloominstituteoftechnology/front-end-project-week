import { GETTING_DATA, DATA_SUCCESS, GET_NOTE, ADD_NOTE, GET_NOTE_SUCCESS, ADDED_NOTE, EDIT_NOTE, EDIT_NOTE_SUCCESS, DELETE_NOTE, NOTE_DELETED ,ERROR} from '../actions';

const initialState = {
    addingNote: false,
    gettingNotes: false,
    noteAddSuccess: false,
    gettingNote: false,
    edittingNote:false,
    noteEditSuccess:false,
    deletingNote:false,
    noteDeleted:false,
    notes: [],
    error: null,
    currentNote:null
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type){
        case GETTING_DATA:
        return {
            ...state , 
            gettingNotes: true
        };
        
        case DATA_SUCCESS:
        return{
            ...state,
            notes: [
                ...action.results
            ],
            gettingNotes:false,
            noteAddSuccess:false,
            noteDeleted:false,
            noteEditSuccess:false,
            currentNote: null
        };

        case ADD_NOTE:
        return {
            ...state,
            addingNote: true,
        };

        case ADDED_NOTE:
        return {
            ...state,
            noteAddSuccess: true,
            addingNote:false,
        };

        case GET_NOTE:
        return {
            ...state,
            gettingNote: true,
            noteEditSuccess: false,
        };

        case GET_NOTE_SUCCESS:
        return {
            ...state,
            gettingNote: false,
            currentNote: action.result,
        };

        case EDIT_NOTE:
        return {
            ...state,
            edittingNote: true,
        };

        case EDIT_NOTE_SUCCESS:
        return {
            ...state,
            edittingNote: false,
            noteEditSuccess: true,
        };

        case DELETE_NOTE:
        return {
            ...state,
            deletingNote: true,
        };

        case NOTE_DELETED:
        return {
            ...state,
            noteDeleted: true,
            deletingNote: false
        };

        case ERROR:
        return {
            ...state,
            gettingNotes: false,
            error: action.error
        };
        default:
            return state;
    }
}