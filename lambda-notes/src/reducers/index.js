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
}

export const rootReducer = (state = initialState, action) => {
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
                notes: [...state, ...action.payload]
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
                note: action.payload,
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
                notes: [ ...action.payload ],
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
            return {
                ...state,
                gettingNotes: false,
                notes: action.payload,
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
            return {
                ...state,
                gettingNotes: false,
                notes: [ ...state, ...action.payload ],
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
