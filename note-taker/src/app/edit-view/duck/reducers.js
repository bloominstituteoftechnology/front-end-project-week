
import types from './types';
const initialState = {
    updatingNote: false,
};

const editViewReducer = (state = initialState, action) => {

    switch (action.type) {
        case types.UPDATING_SINGLE_NOTE:
        return {
            ...state,
            updatingNote: true,
        }
        case types.UPDATED_SINGLE_NOTE:
        return {
            ...state,
            updatingNote: false,
        }
        default:
        return state;
    }
}

export default editViewReducer;