import { CREATE_NOTE } from '../Actions/index'

const initialState = {
    notes: [],
    edited: false,
    deleted: false
}

const reducer = (state = initialState, action) => {
    switch(action.type) {
        default:
            return state
    }
}

export default reducer;