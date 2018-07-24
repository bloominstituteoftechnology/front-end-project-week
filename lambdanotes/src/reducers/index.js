import { GET_NOTES, ADD_NOTE } from '../actions/index';


const notesReducer = (state = [], action) => {
    switch (action.type) {
        case GET_NOTES:
            return [
                ...state, action.payload
            ]
        case ADD_NOTE:
            return [
                ...state, action.payload
            ]
        default:
            return state;
    }
}

export default notesReducer;