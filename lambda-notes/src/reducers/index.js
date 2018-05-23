import {
    ADD_NOTE,
    UPDATE_NOTE,
    DELETE_NOTE,
    ERROR
} from '../actions'
import dummyData from '../Components/Dummy-Data'

const initialState = {
    notes: [],
    addNote: false,
    updateNote: false,
    deleteNote: false,
    error: null,
}

export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, { addNote: true });
        case UPDATE_NOTE:
            return Object.assign({}, state, { addNote: false, updateNote: true });
        case DELETE_NOTE:
            return Object.assign({}, state, { updateNote: false, deleteNote: true, notes: action.payload });
        case ERROR:
            return Object.assign({}, state, { error: action.payload });
        default:
            return state;   
    }
};