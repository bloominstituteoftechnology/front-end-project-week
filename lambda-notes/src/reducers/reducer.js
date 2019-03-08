import { MOVE_CARD, SUCCESS, LOADING, ERROR, HANDLE_ID } from '../actions/actions'
import update from 'immutability-helper';

const initialState = {
    notes: [],
    loading: false,
    error: null,
    active_Id: null
}

export default (state= initialState, action) => {
    switch(action.type) {
        case LOADING:
        return {...state, loading: true, error: null};
        case SUCCESS:
        return {
            notes: [...action.payload],
            loading: false,
            error: null,
            active_Id: null,
        };
        case ERROR:
        return {...state, loading: false, error: action.payload};
        case HANDLE_ID:
        return {...state, active_Id: action.payload};
        case MOVE_CARD:
        {
            const dragNote = state.notes[action.dragIndex];
            return update(state, {
                notes: {
                    $splice: [[action.dragIndex, 1], [action.hoverIndex, 0, dragNote]]
                }
            })
        }
        default:
            return state
    }
}