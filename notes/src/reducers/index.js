import { LOADING, GET_NOTES, ERROR } from '../actions';

const initialState = {
    notes: [],
    loading: false,
    error: null,
};

export default (state = initialState, action) => {
    switch(action.type) {
        case LOADING:
            return {...state, loading: true};
        case ERROR:
            return {...state, error: action.errorMessage, loading: false};
        case GET_NOTES:
            return {...state, notes: action.notes, loading: false}        
        default:
            return state;
    }
}