import {ADDING_NOTE,
        NOTE_ADDED,
        UPDATING_NOTE,
        NOTE_UPDATED,
        DELETING,
        DELETED,
        FETCHED,
        FETCHING,
        SINGLE_FETCHED,
        FETCHING_SINGLE,
        ERROR} from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    fetchingNote: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: null,
    note: {}
}


const rootReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING:
        return{...state, fetchingNotes: true};

        case FETCHED:
        return{...state, fetchingNotes: false, notes: action.payload}

        case FETCHING_SINGLE:
        return{...state, fetchingNote: true};

        case SINGLE_FETCHED:
        return{...state, fetchingNote: false, note: action.payload}

        case ADDING_NOTE:
        return{...state, addingNote: true};

        case NOTE_ADDED:
        return {...state,addingNote: false};
        
        case UPDATING_NOTE:
        return {...state, updateingNote: true};

        case NOTE_UPDATED:
        return {...state, updatingNote:false, note: action.payload};

        case DELETING:
        return {...state, deletingNote: true};

        case DELETED:
        return{...state, deletingNote: false, note: {}};

        case ERROR:
        return{...state, error: action.payload, fetchingNotes: false};

        default:
            return state;
    }
}

export default rootReducer;