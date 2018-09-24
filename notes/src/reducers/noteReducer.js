import * as actionTypes from '../actions';

const initialState = {
    noteSelected: {},
    showUpdate: false,
}

export const noteReducer = (state = initialState, action) => {
   switch (action.type) {
    case actionTypes.SINGLE_NOTE:
        return{ ...state, noteSelected:action.payload, showUpdate:false };
    case actionTypes.TOGGLE_UPDATE_NOTE:
        return { ...state, showUpdate: !state.showUpdate };
    default:
        return state;
    }
};