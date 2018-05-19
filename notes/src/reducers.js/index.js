import { FETCHNOTES, ERR } from '../actions.js';

const initialState ={
    notes: []
}
export default (state = initialState, action) => {
    switch(action.type) {
        case FETCHNOTES:
        return {
            ...state,
            notes: [...action.payload]
        }
        case ERR:
        return {
            ...state,
            error: 'idk'
        }
        default:
        return state;
    }
}