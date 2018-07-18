import { TOGGLE_MODAL, TOGGLE_DELETE, TOGGLE_UPDATE } from './../actions';

const initialState = {
    showModal: false,
    delete: false,
    update: false
}

export const toggleReducers = (state = initialState, {type}) => {
    switch(type) {
        case TOGGLE_MODAL:
            return {...state, showModal: !state.showModal}
        case TOGGLE_DELETE:
            return {...state, delete: !state.delete}
        case TOGGLE_UPDATE:
            return {...state, update: !state.update}
        default:
            return state;
    }
}

