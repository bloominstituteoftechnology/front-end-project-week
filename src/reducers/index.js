import { LOADING, GET_NOTES, GET_NOTE, ERROR_MESSAGE } from '../actions/index';

const initialState = {
    notes: [],
    loading: false,
    error: '',
    currentNote: ''
}

