import { FETCHING, FETCHED, ADDING, ADDED, UPDATING, UPDATED, DELETING, DELETED, FETCH_ERROR, ADD_ERROR, UPDATE_ERROR, DELETE_ERROR, SET_UPDATE_NOTE } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: '',
    noteToUpdate: null,
};

export default function (state = initialState, action) {
    switch(action.type) {
        case FETCHING:
            return {...state, fetchingNotes: true};
        case FETCHED:
            return {...state, notes: [...action.payload], fetchingNotes: false};
        case ADDING:
            return {...state, addingNote: true};
        case ADDED:
            return {...state, addingNote: false};
        case SET_UPDATE_NOTE:
            const note = state.notes.find(note => note._id === action.payload );
            return {...state, noteToUpdate: note ? note : null }
        case UPDATING:
            return {...state, updatingNote: true };
        case UPDATED:
            console.log(action.payload);
            return {...state, updatingNote: false, noteToUpdate: null};
        case DELETING:
            return {...state, deletingNote: true };
        case DELETED:
            return {...state, deletingNote: false,};
        case FETCH_ERROR:
            console.log(action.payload);
            return {...state, fetchingNotes: false, error: action.payload };
        case ADD_ERROR:
            console.log(action.payload);
            return {...state, addingNote: false, error: action.payload };
        case UPDATE_ERROR:
            console.log(action.payload);
            return {...state, updatingNote: false, error: action.payload };
        case DELETE_ERROR:
            console.log(action.payload);
            return {...state, deletingNote: false, error: action.payload };
        default:
            return state;
    }
}