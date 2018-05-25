import { FETCH_NOTES, DELETE_NOTE, ERROR } from '../Actions'

const initialState = {
    notes: []
}

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_NOTES:
            let newState = []
            for (let key in action.payload) {
                newState.push({ key: key, title: action.payload[key].title, text: action.payload[key].text, id: action.payload[key].id })
            }
            return {
                ...state,
                notes: newState
            }
        case ERROR:
            return {
                ...state,
                notes: []
            }
        default:
            return state;
    }
};