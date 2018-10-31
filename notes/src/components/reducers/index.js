//import actions
import { GETTING_NOTES, NOTE_SUCCESS, FIND_NOTE } from '../actions';

const initialState = {
    noteList: [],
    listLoading: false,
    note: {
        tags: [],
        title: '',
        textBody: ''
    }
    // editNote:
    // createNote:
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
        case FIND_NOTE:
            return {
                
            }
        default:
            return state
    }
}

export default noteReducer;