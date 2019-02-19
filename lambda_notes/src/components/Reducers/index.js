import { LOADING, SUCCESS, ERROR, NOTE } from '../Actions/index';



const initialState = {
    notes: [],
    path:'',
}


export const rootReducer = ( state = initialState, action ) => {
    switch(action.type) {
            case LOADING:
                return Object.assign({}, state, {notes: action.payload, fetching: true});
            case SUCCESS: 
                return Object.assign({}, state, {notes: action.payload, fetching: false});
            case NOTE:
                return Object.assign({}, state, {note: action.payload, fetching: false});
            case ERROR: 
                return Object.assign({}, state, {fetching: false});
        default: return state;
    }
}