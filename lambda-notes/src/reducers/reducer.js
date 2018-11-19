import { SUCCESS, LOADING, ERROR, HANDLE_ID, FILTER } from '../actions/actions'

const initialState = {
    notes: [],
    loading: false,
    error: null,
    active_Id: null
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
            active_Id: null,
        };
        case ERROR:
        return {...state, loading: false, error: action.payload};
        case HANDLE_ID:
        return {...state, active_Id: action.payload};
        default:
            return state
    }
}