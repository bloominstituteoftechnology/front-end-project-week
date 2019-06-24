import {
    ADD_NOTE
} from '../actions/actions';

const initialState = {
    notes: [
        {
            "tags": [],
            "_id": 1,
            "title": "Note Title",
            "textBody": "Note Text Body",
            "__v": 0
        }
    ]
};
const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {
                notes: [...state.notes, action.payload]
                }
            );
        default:
            return state;
    }
};
export default notesReducer;