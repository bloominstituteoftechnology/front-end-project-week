import { GET_NOTES, ADD_NOTE, EDIT_NOTE } from '../actions/index';


const initialState = [
        {title: 'whatever1',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 0},
        {title: 'whatever2',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 1},
        {title: 'whatever3',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 2},
        {title: 'whatever4',
        content: 'blah blah blah blah blah blah blah blah blah blah',
        id: 3},
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
        case EDIT_NOTE:
            return (
                state.splice().map(note => {
                    if (note.id === action.payload.id) {
                        note.title = action.payload.title;
                        note.content = action.payload.content;
                    }
                })
            )
        default:
            return state;
    }
}

export default notesReducer;