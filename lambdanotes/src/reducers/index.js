import {
    NEW_NOTE,
    EDIT_NOTE,
    DEL_NOTE,
    ERROR
} from '../actions';

const initialState = {
    notes: [

    ]
};

export default function notes(state = initialState, action) {
    switch (action.type) {
        case NEW_NOTE:
            return{
                ...state,
                notes: [...state.notes, { ...action.note, id:action.id }]
            };

        case EDIT_NOTE:
            let copy = sate.notes.slice();
            copy.filter(note => note.id !== action.id).push(action.note);
            return{
                ...state,
                notes: copy
            };

        case DEL_NOTE:
            return{
                ...state,
                notes: state.notes.slice().filter(note => note.id !== action.id)
            };

        case ERROR:
            console.log("Error Occurred", action.error);
            return { ...state, authed: false, error: action.error };
                default:
            return state;

        }
}