//import actions
import { GETTING_NOTES, NOTE_SUCCESS, SINGLE_NOTE, CREATE_NOTE, EDIT } from '../actions';

const initialState = {
    noteList: [],
    listLoading: false,
    note: {
        tags: [],
        title: '',
        textBody: ''
    },
    editNote: true,
    // editNote:
    // noteLoading:
    // deleteNote:
    // deleteModal:
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
                    tags: action.payload.tags,
                    title: action.payload.title,
                    textBody: action.payload.textBody
                }
            }
        case CREATE_NOTE:
            return {
                ...state,
                note: {
                    tags: [],
                    title: '',
                    textBody: ''
                },
                editNote: false
            }
        case EDIT:
            return {
                ...state,
                editNote: true
            }
        default:
            return state
    }
}

export default noteReducer;