import { ACTIONS } from '../Actions';

const initialState = {
    notes: [],
    isCollecting: false,
    isAssembling: false,
    isRevising: false,
    isExpunging: false,
    activePage: ''
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {

        // READ
        case ACTIONS.COLLECTING_NOTES:
        return {...state, isCollecting: true};

        case ACTIONS.NOTES_COLLECTED:
        return {...state, notes: action.notes, isCollecting: false};

        // CREATE
        case ACTIONS.ASSEMBLING_NOTE:
        return {...state, isAssembling: true};

        case ACTIONS.NOTE_ASSEMBLED:
        return {...state, notes: [...state.notes, action.note], isAssembling: false};

        // UPDATE
        case ACTIONS.REVISING_NOTE:
        return {...state, isRevising: true};

        case ACTIONS.NOTE_REVISED:
        const index = state.notes.map(note => note._id).indexOf(action.noteId);
        console.log(index);
        const updatedNotes = [...state.notes.slice(0, index), {...action.note}, ...state.notes.slice(index + 1)];
        return {...state, notes:[...updatedNotes], isRevising: false};

        // DELETE
        case ACTIONS.EXPUNGING_NOTE:
        return {...state, isExpunging: true};

        case ACTIONS.NOTE_EXPUNGED:
        const remainingNotes = state.notes.filter(note => note._id !== action.noteId);
        return {...state, notes:[...remainingNotes], isExpunging: false};

        default: 
        return state;
    }
}