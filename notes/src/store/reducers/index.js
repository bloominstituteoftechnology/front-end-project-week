import { ADD_NOTE } from '../actions';

const initialState = {
    notes: [{
        title: 'test',
        text: 'hello'
    }]
};

export const notesReducer = (state=initialState, action) => {
    switch(action.type) {
        case ADD_NOTE:
            return Object.assign({}, state, {notes: [...state.notes, action.payload]});
        default: 
            return state;
    }
}