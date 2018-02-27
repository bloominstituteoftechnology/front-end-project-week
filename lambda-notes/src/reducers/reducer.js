import * as actionTypes from '../actions/actions';

const initialState = {
    notes: [],
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADDNOTE:
            return { ...state, notes: action.payload };
        default:
            return state;
    }
}