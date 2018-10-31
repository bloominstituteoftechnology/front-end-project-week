//import actions
import { GETTING_NOTES, NOTE_SUCCESS } from '../actions';

const initialState = {
    noteList: [],
    listLoading: false
    // note: {
    //     tags: [],
    //     title: '',
    //     textBody: ''
    // }
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
        default:
            return state
    }
}

export default noteReducer;