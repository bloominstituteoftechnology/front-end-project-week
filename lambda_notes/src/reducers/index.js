import {FETCHING, FETCHED, FETCHINGNOTE, FETCHEDNOTE, ERROR, UPDATING, DELETING, ADDING} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    fetched: false,
    fetchingnote: false,
    fetchednote: false,
    updating: false,
    deleting: false,
    adding: false,
    error: null,
    currentNote: {},
    location: "",
}

const noteReducer = (state = initialState, action) => {
    switch(action.type){
        case FETCHING:
            return {...state, 
                fetching: true,
                fetched: false}
        case FETCHED:
            return {...state,
                notes: action.payload, 
                fetching: false,
                fetched: true,
                updating: false,
                deleting: false,
                adding: false,
                error: null}
        case FETCHINGNOTE:
            return{...state,
                fetched: false,
                fetchingnote: true,
                fetchednote: false,
                }
        case FETCHEDNOTE:
            return {...state,
                currentNote: action.payload,
                fetching: false,
                fetched: false,
                fetchingnote: false,
                fetchednote: true,
                updating: false,
                deleting: false,
                adding: false,
                error: null
            }
        case ERROR: 
            return { ...state,
                fetching: false,
                fetched: false,
                fetchingnote: false,
                fetchednote: false,
                updating: false,
                deleting: false,
                adding: false,
                error: action.payload}
        default:
            return state;
    }
}

export default noteReducer;