import {FETCHING, FETCHED, ERROR, UPDATING, DELETING, ADDING} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    fetched: false,
    updating: false,
    deleting: false,
    adding: false,
    error: null,
    URL: "https://killer-notes.herokuapp.com/note/get/all",
}

const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING:
            return {...state, 
                fetching: true,
                fetched: false}
        case FETCHED:
            return {...state, 
                fetching: false,
                fetched: true,
                updating: false,
                deleting: false,
                adding: false,
                error: null}
        case ERROR: 
            return { ...state,
                fetching: false,
                fetched: false,
                updating: false,
                deleting: false,
                adding: false,
                error: action.payload}
        default:
            return state;
    }
}

export default noteReducer;