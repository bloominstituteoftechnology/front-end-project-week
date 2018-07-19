import types from './types';

const initialState = {
    note: {},
    fetchingNote: false,
    deletingNote: false,
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
            fetchingNote: false,
            note: action.noteObj
        }
        case types.DELETING_SINGLE_NOTE:
        return {
            ...state,
            deletingNote: true,
        }
        case types.DELETE_SINGLE_NOTE:
        return {
            ...state
        }
        default:
        return state;
    }
}

export default noteViewReducer;