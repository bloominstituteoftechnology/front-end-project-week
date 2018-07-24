import { GET_NOTES, ADD_NOTE } from '../actions/index';


const initialState = [
        {title: 'whatever1',
        content: 'blah blah blah blah blah blah blah blah blah blah'},
        {title: 'whatever2',
        content: 'blah blah blah blah blah blah blah blah blah blah'},
        {title: 'whatever3',
        content: 'blah blah blah blah blah blah blah blah blah blah'},
        {title: 'whatever4',
        content: 'blah blah blah blah blah blah blah blah blah blah'},
]


const notesReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_NOTES:
            return [
                ...state
            ]
        case ADD_NOTE:
            return [
                ...state, action.payload
            ]
        default:
            return state;
    }
}

export default notesReducer;