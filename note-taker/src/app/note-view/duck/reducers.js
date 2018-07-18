import types from './types';

const initialState = {
    note: {},
    fetchingNote: false,
};

const noteViewReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_SINGLE_NOTE:
        return {
            ...state,
            fetchingNote: true,
        }
        case types.FETCHED_SINGLE_NOTE:
        return {
            ...state,
            note: action.noteObj
        }
        default:
        return state;
    }
}

export default noteViewReducer;