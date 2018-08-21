import * as actionTypes from '../actions/actions';


const initialState = [
    {
    gettingNotes: false,
    gotNotes: false,
    noteSaved: false,
    savingNote: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    notes: [],
    error: null
    }
];

export const Reducer = (state = initialState, action) => {
    switch (action.type) {

        case actionTypes.GETTING_NOTES:
        return {
            ...state,
            gettingNotes: true
        };

        case actionTypes.GOT_NOTES:
        return {
            ...state,
            gotNotes: true,
            gettingNotes: false,
            notes: [...action.payload]
        };

        case actionTypes.ERROR:
        return {
            ...state,
            error: action.payload
        };

        case actionTypes.NOTE_SAVED:
        return {
            ...state,
            noteSaved: true,
            notes: [...action.payload]
        }

        case actionTypes.NOTE_DELETED:
        return {
            ...state,
            noteDeleted: true,
            notes: [...action.payload]
        }

        case actionTypes.NOTE_UPDATED:
        return {
            ...state,
            noteUpdated: true,
            notes: [...action.payload]
        }

        default:
        return state;
    }
}