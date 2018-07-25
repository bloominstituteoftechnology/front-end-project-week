import { VIEW_NOTE } from '../actions/index';

const initialState = {
    selectedNote: {},
}

const singleNoteReducer = (state = initialState, action) => {
    switch(action.type) {
        case VIEW_NOTE:
            return state.selectedNote = action.payload;
        default:
            return state;
    }
}

export default singleNoteReducer;