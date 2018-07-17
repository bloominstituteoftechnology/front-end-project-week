import {FETCHING, FETCHED, FETCHINGNOTE, FETCHEDNOTE, ERROR, UPDATING, DELETING, DELETED, ADDING, ADDED} from '../actions';

const initialState = {
    notes: [],
    fetching: false,
    fetched: false,
    fetchingnote: false,
    fetchednote: false,
    updating: false,
    deleting: false,
    adding: false,
    added: false,
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
                }
        case FETCHINGNOTE:
            return{...state,
                fetched: false,
                fetchingnote: true,
                fetchednote: false,
                }
        case FETCHEDNOTE:
            return {...state,
                currentNote: action.payload,
                fetchingnote: false,
                fetchednote: true,
                }
        case ADDING:
            return {...state,
                adding: true,
                added: false,
                }
        case ADDED:
            return {...state,
                adding: false,
                added: true,
                }
        case DELETING:
            return {...state,
                deleting: true,
                deleted: false
                }
        case DELETED: 
            return {...state,
                deleting: false,
                deleted: true
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
                error: action.payload
                }
        default:
            return state;
    }
}

export default noteReducer;