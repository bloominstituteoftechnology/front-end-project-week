import { LOADING, GET_NOTES, DELETE_NOTE, ERROR } from '../actions/noteActions'

const intialState = {
    notes: [],
    title: "",
    textBody: "",
    delete: false,
    search: '',
    loading: false,
    error: ''
}


export const noteReducer = (state = intialState, action) => {

    switch (action.type) {
        case LOADING:
            return { ...state, loading: true }
        case GET_NOTES:
            return { ...state, notes: action.payload, loading: false }
        case DELETE_NOTE:
            return {...state, notes: action.payload, loading: false}
        case ERROR:
            return { ...state, error: action.errorMessage, loading: false }
        default:
            return state
    }
}