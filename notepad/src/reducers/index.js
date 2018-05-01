import { PENDING, ERROR, SUCCESS, UPDATING } from '../actions';

const initialState = {
    notes: [],
    fetchingNotes: false,
    addingNote: false,
    updatingNote: false,
    deletingNote: false,
    error: null,
    note: {}
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case PENDING:
            return Object.assign({}, state, { fetchingNotes: true });
        case SUCCESS:
            return Object.assign({}, state, {
                notes: action.notes,
                fetchingNotes: false
            });
        case ERROR:
            return Object.assign({}, state, {
                error: action.error,
                fetchingNotes: false
            });
        case UPDATING:
            return Object.assign({}, state, {
                updating: true,
                note: action.note
            });
        default:
            return state;
    }

}

export default noteReducer;