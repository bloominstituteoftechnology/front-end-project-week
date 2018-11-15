import { LOADING_NOTES, NOTES_LOADED, ADDING_NOTES, UPDATING_NOTES, DELETING_NOTES, ERROR } from '../Actions/notesActions';

const initialState = {
    notes: [],
    loadingNotes: false,
    notesLoaded: false,
    addingNotes: false,
    updatingNotes: false,
    deletingNotes: false,
    error: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case LOADING_NOTES:
            return Object.assign({}, state, {
                loadingNotes: true,
                error: null,
            })
        case ERROR:
            return Object.assign({}, state, {
                error: action.payload,
                loadingNotes: false,
            })
        case NOTES_LOADED:
            return Object.assign({}, state, {
                loadingNotes: false,
                notes: action.payload,
                notesLoaded: true,
                addingNotes: false,
                updatingNotes:false,
                deletingNotes: false,
                error: null,
            })
        case ADDING_NOTES:
            return Object.assign({}, state, {
                addingNotes: true,
                error: null,
            })
        case UPDATING_NOTES:
            return Object.assign({}, state, {
                updatingNotes: true,
                error: null,
            })
        case DELETING_NOTES:
            return Object.assign({}, state, {
                deletingNotes: true,
                error: null,
            })
        default:
            return state;
    }
}