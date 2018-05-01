import { ADD_NOTE } from '../Actions/index'

const initialState = {
    notes: [],
    edited: false,
    deleted: false
}

const reducer = (state = initialState, action) => {
    console.log(initialState)
    switch(action.type) {
        case ADD_NOTE:  
            return Object.assign({}, state, { notes: action.data });
        default:
            return state
    }
}


export default reducer;