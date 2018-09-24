import { ADD_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
    notes: []
};

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {notes: [...state.notes, action.payload]});
        case DELETE_NOTE:
            return ({...state, notes: state.notes.filter(note => action.title !== note.title)});
        default: 
            return state;
    }
}