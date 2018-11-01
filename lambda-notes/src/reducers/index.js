import {
    GET_NOTES,
    GET_NOTES_SUCCESS,
    GET_NOTES_ERROR,
    UPDATE_NOTE,
    UPDATE_NOTE_ERROR,
    UPDATE_NOTE_SUCCESS,
    ADD_NOTE,
    ADD_NOTE_ERROR,
    ADD_NOTE_SUCCESS,
    DELETE_NOTE,
    DELETE_NOTE_ERROR,
    DELETE_NOTE_SUCCESS,
    GET_NOTE,
    GET_NOTE_ERROR,
    GET_NOTE_SUCCESS,
} from '../actions/index'

const initialState = {
    notes: [],
    note: {},
    gettingNotes: false,
    updatingNote: false,
    noteDeleted: false,
    noteAdded: false,
    posted: false,

}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return {
                ...state,
                gettingNotes: true,
            }
        case GET_NOTES_SUCCESS:
            return {
                ...state,
                gettingNotes: false,
                notes: [...action.payload.reverse()],
            }
        case GET_NOTES_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }
        case GET_NOTE:
            return {
                ...state,
                gettingNotes: true,
            }
        case GET_NOTE_SUCCESS:
            return {
                ...state,
                gettingNotes: false,
                note: {...action.payload}
            }
        case GET_NOTE_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }

        case ADD_NOTE:
            return {
                ...state,
                gettingNotes: true,
            }
        case ADD_NOTE_SUCCESS:
            return {
                ...state,
                gettingNotes: false,
                notes: [...action.payload, ...state.notes]
            }
        case ADD_NOTE_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }

        case DELETE_NOTE:
            return {
                ...state,
                gettingNotes: true,
            }
        case DELETE_NOTE_SUCCESS:
        const newNotes = state.notes.filter(note => note._id !== action.payload)
            return {
                ...state,
                gettingNotes: false,
                notes: [...newNotes]
            }
        case DELETE_NOTE_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }

        case UPDATE_NOTE:
            return {
                ...state,
                gettingNotes: true,
            }
        case UPDATE_NOTE_SUCCESS:
        let index;
        state.notes.forEach( (note,i) => (note._id === action.payload._id ? (index = i) : null))
        const newStateNotes = [...state.notes]
        newStateNotes.splice(index, 1, action.payload)
            return {
                ...state,
                gettingNotes: false,
                notes: [...newStateNotes]
            }
        case UPDATE_NOTE_ERROR:
            return {
                ...state,
                gettingNotes: false,
            }
        default:
            return state
    }
}

export default rootReducer