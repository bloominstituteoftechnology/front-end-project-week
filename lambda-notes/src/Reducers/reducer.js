import { ADD_NOTE } from '../Actions/index'

const initialState = {
    notes: [{ title: 'todo1', content: 'jfdlsajads' }, { title: 'todo2', content: 'klfjeiujoisd' }, { title: 'todo3', content: 'dfsdareee' }],
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
