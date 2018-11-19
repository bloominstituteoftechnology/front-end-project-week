import { FETCHING, FETCHED, ERROR  } from  '../actions';

const initialState = {
    fetchingNotes: false,
    notesFetched: false,
    noteSaved: false,
    savingNote: false,
    updatingNote: false,
    noteUpdated: false,
    deletingNote: false,
    noteDeleted: false,
    notes: [],
    error: null
}

export const noteReducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING:
            return Object.assign({}, state, {
                fetchingNotes: true
            });
        case FETCHED:
        return Object.assign({}, state, {
            notes: state.notes.concat(action.payload),
            notesFetched: true,
            fetchingNotes: false
        });
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                notesFetched: false,
                fetchingNotes: false
            });
        default:
            return state;
    }
}