import { DELETE_NOTE, EDIT_NOTE, CREATE_NOTE, FETCH_NOTES } from '../actions';
import { postNote } from '../actions';
import { removeNote } from '../actions';
import { updateNote } from '../actions';


const initialState = [];
//                    Current application state, {action object}
// returns: the next application state
const notesReducer = (state = initialState, action) => {
    let temp = Array.from(state);
    switch(action.type) {
        case DELETE_NOTE:
            state.forEach((item, index) => {
                if (item._id === action.payload) {
                    temp.splice(index, 1);
                    removeNote(action.payload);
                    return;
                }
            });
            return temp;
        case EDIT_NOTE:
        state.forEach((item, index) => {
            if (item._id === action.payload._id) {
                temp.splice(index, 1);
                updateNote(action.payload);
                return;
            }
        });
        temp.push(action.payload);
        return temp;
        case CREATE_NOTE:
            temp.push(action.payload);
            postNote(temp);
            return temp;
        case FETCH_NOTES:
            return state.initialState = action.payload;
        default:
            // returns: the next application state
            return state;
    }
}

export default notesReducer;


