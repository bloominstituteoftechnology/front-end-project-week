import { ADD_NOTE } from '../Actions/index'

const initialState = {
    notes: [
        { title: 'Todo 1', content: 'Lorem ipsum dolor sit amet.' }, 
        { title: 'Todo 2', content: 'consectetur adipiscing elit.' }, 
        { title: 'Todo 3', content: 'dfsdareee' }
    ],
    id: 0,
    edited: false,
    deleted: false
}

const reducer = (state = initialState, action) => {
   
    switch(action.type) {
        case ADD_NOTE:  
        console.log("STATE", state);
        return Object.assign({}, state, { notes: state.notes.concat(action.notes) });
        default:
            return state
    }
}

export default reducer;
