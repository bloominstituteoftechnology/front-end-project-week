import { LOADING, SUCCESS, ERROR } from '../Actions/index';



const initialState = {
    notes: {},
    path:'',
}


export const rootReducer = ( state = initialState, action ) => {
    switch(action.type) {
            case LOADING:
                return Object.assign({}, state, {notes: action.payload, fetching: true});
            case SUCCESS: 
                return Object.assign({}, state, {notes: action.payload});
            case ERROR: 
                return Object.assign({}, ...state, {fetching: false});
        default: return state;
    }
}