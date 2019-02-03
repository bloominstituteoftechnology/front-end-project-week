import types from './types';
const initialState = {
    postingNote: false,
}


const createNoteReducer = (state=initialState, action) => {
    switch(action.type) {
        case types.POSTING_NOTE:
        return {
            ...state,
            postingNote: true,
        }
        case types.POSTED_NOTE:
        return {
            ...state,
            postingNote: false
        }
        default:
        return state;
    }
}

export default createNoteReducer;