import { SUCCESS, CREATE_NOTE } from '../actions/index';

const initialState = {
    notes: [],
}


export const notesReducer = (state = initialState, action) => {
    switch(action.type) {
        case SUCCESS:
            return {...state, notes:action.payload};
        case CREATE_NOTE:
            return {...state}// {...state}
        default:
            return state;
    }
};