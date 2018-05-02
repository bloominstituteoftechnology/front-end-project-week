import { LOADING, SUCCESS } from '../Action';

// defaultState = { notes = [], fetching = false, }

const defaultState = {
    notes: [],
    fetching: false,
    note: {}
}

export default (state = defaultState, action) => {
    switch(action.type){

        case LOADING:
            return Object.assign({}, state, { LOADING: true });
        
        case SUCCESS:
            return Object.assign({}, state, { notes: action.notes, LOADING: false })

        default:
            return state;
    }
}