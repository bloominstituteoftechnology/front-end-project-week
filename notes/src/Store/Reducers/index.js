import { ACTIONS } from '../Actions';

const initialState = {
    notes: [],
    isCollecting: false,
    isAssembling: false,
    isRevising: false,
    isExpunging: false,
    activePage: ''
}

const reducer = (state = initialState, action) => {
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
        return {...state, notes: action.notes, isAssembling: false};

        // UPDATE
        case ACTIONS.REVISING_NOTE:
        return {...state, isRevising: true};

        case ACTIONS.NOTE_REVISED:
        return {...state, notes: action.notes, isRevising: false};

        // DELETE
        case ACTIONS.EXPUNGING_NOTE:
        return {...state, isExpunging: true};

        case ACTIONS.NOTE_EXPUNGED:
        return {...state, notes: action.notes, isExpunging: false};

        default: 
        return state;
    }
}