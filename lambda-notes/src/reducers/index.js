import { FETCH_NOTES } from '../actions';

const initialState = {
    notes: [ 
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test',id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()},
        {title: 'test', body: 'test', id: Date.now()}
     ],
    pending: false,
    error: null
}


export const notesReducer = (state = initialState, action) => {
    // console.log(state)
    switch(action.type) {
        case FETCH_NOTES:
            return (Object.assign({}, state, {notes: state.notes.slice()}))
        default: 
            return state;
           
    }
}
