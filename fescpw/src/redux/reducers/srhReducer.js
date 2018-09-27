import { 
    SRH_EDT,
} from '../actions';

const initialState = {
    srhfd: ""
}

export const srhReducer = (state = initialState, action={}) => {
    switch(action.type) {
        case SRH_EDT:
            return Object.assign({}, state, { srhfd: action.payload });
        default:
            return state;
    }
}