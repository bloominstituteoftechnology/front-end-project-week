import { ADD_NOTE, DELETE_NOTE, SET_UPDATE_NOTE, UPDATE_NOTE } from '../actions';

const initialState = {
    notes: [],
    noteToUpdate: null
    
};

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {notes: [...state.notes, action.payload]});
        case DELETE_NOTE:
            return ({...state, notes: state.notes.filter(note => action.title !== note.title)});
        case SET_UPDATE_NOTE:
        const note = state.notes.find(note => note.title === action.payload)
            return {...state, noteToUpdate: note ? note : null}
        case UPDATE_NOTE:
       
        let noteIndex = state.notes.findIndex(note => note.id == action.payload.id);
        console.log('noteindex', noteIndex);
        state.notes[noteIndex] = action.payload;
            return {...state, ...state.notes[noteIndex], noteToUpdate: null}
        default:
            return state;
    }
}