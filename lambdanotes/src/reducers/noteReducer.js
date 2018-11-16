import { LOADING, SUCCESS, ERROR } from '../actions/noteAction';

const initialState = {
    notes: [],
    error: '',
    loading: false
};

export default (previousState = initialState, action) => {
    return previousState
}