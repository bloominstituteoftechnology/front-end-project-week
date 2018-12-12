//import actions
import { GETTING_NOTES, NOTE_SUCCESS, SINGLE_NOTE, CREATE_NOTE, CREATIVE, EDIT, DELETE_CONFIRM, DELETE_OFF } from '../actions';

const initialState = {
    noteList: [],
    listLoading: false,
    note: {
        tags: [],
        title: '',
        textBody: ''
    },
    editNote: true,
    // noteLoading:
    // deleteNote:
    deleteModal: false
}

const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case GETTING_NOTES:
            return {
                ...state,
                listLoading: true
            }
        case NOTE_SUCCESS:
            return {
                ...state,
                noteList: action.payload,
                listLoading: false
            }
        case SINGLE_NOTE:
            return {
                ...state,
                note: {
                    id: action.payload.id,
                    // tags: action.payload.tags,
                    title: action.payload.title,
                    textBody: action.payload.textBody
                }
            }
        case CREATIVE:
            return {
                ...state,
                editNote: false
            }
        case CREATE_NOTE:
            return {
                ...state,
                note: {
                    ...state,
                    title: action.payload.title,
                    textBody: action.payload.textBody
                },
            }
        case EDIT:
            return {
                ...state,
                editNote: true
            }
        case DELETE_CONFIRM:
            return {
                ...state,
                deleteModal: true
            }
        case DELETE_OFF:
            return {
                ...state,
                deleteModal: false
            }
        default:
            return state
    }
}

export default noteReducer;