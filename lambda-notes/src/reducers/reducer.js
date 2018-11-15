import { SUCCESS, LOADING, ERROR } from '../actions/actions'

const initialState = {
    notes: [],
    loading: false,
    error: null,
}

export default (state= initialState, action) => {
    switch(action.type) {
        case LOADING:
        return {...state, loading: true, error: null};
        case SUCCESS:
        return {
            notes: [...action.payload],
            loading: false,
            error: null,
        }
        case ERROR:
        return {...state, loading: false, error: action.payload}
        default:
            return state
    }
}