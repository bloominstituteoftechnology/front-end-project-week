import { FETCH_NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE, SEARCH_NOTE, ADD_USER, LOGIN_USER, CSV, ERROR } from '../actions';


const initialState = {
    notes: [],
    user: [],
    filteredCSV: [],
    pending: false,
    error: {}
}

export const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            const notes = state.notes.slice()
            return (Object.assign({}, state, { notes: action.payload }))
        case ADD_NOTE:
            return Object.assign({}, state, { notes: state.notes.concat(action.payload) })
            console.log(action.payload)
        case DELETE_NOTE:
            return Object.assign({}, state, {
                notes: state.notes.filter(note => {
                    return note._id !== action.payload
                })
            })
        case EDIT_NOTE:
            return Object.assign({}, state, {
                notes: state.notes.filter(note => {
                    return note._id !== action.payload._id
                }).concat(action.payload)
            })
        case SEARCH_NOTE:
            return Object.assign({}, state, {
                notes: state.notes.filter(note => {
                    return note.title == action.payload
                })
            })
        case CSV:
            return Object.assign({}, state, { filteredCSV: action.payload })
        case ADD_USER:
            return Object.assign({}, state, { user: action.payload })
        case ERROR:
            return Object.assign({}.state, { error: action.payload })
        default:
            return state;

    }
}
