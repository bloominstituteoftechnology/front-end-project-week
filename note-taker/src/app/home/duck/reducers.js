import types from './types';

const initialState = {
    notesData: [],
    fetchingNotes: false,
    error: null
};

const homeReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCHING_NOTES: 
        return {
            ...state,
            fetchingNotes: true,
        }
        case types.FETCHED_NOTES:
        return {
            ...state,
            fetchingNotes: false,
            notesData: action.notesData
        }
        default:
        return state;
    }
}

export default homeReducer;
