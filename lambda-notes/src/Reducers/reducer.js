import { ADD_NOTE } from '../Actions/index'

const initialState = {
    notes: [],
    edited: false,
    deleted: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_NOTE: 
            return state;
        default:
            return state
    }
}


export default reducer;