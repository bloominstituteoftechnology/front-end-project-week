import { 
    SEARCH_EDIT,
} from '../actions';

const initialState = {
    searchField: ""
}

export const searchReducer = (state = initialState, action={}) => {
    switch(action.type) {
        case SEARCH_EDIT:
            return Object.assign({}, state, { searchField: action.payload });
        default:
            return state;
    }
}