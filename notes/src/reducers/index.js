import { 
    CREATE_NOTE, 
    EDIT_NOTE, 
    DELETE_NOTE, 
    SORT_NEWEST,
    SORT_OLDEST } from '../actions';

const initialState = {
    sortedBy: null,
    notes: [{ id: 0, title: 'Note Title', text: 'Morbi pellentesque euismod venenatis. Nulla ut nibh nunc. Phasellus diam metus. blandit ac purus a. efficitur mollis blah blah blah blah blah asdfasdfadf', }, { id: 1, title: 'Okay now here is a test', text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.' }, { id: 2, title: 'Okay now here is a test', text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.' }, { id: 3, title: 'Okay now here is a test', text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.' }, { id: 4, title: 'Okay now here is a test', text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.' }, { id: 5, title: 'Okay now here is a test', text: 'Let me tell you what it is a really good test and I am just going to tell you right now about how good of a test it is.' }]
}

export default(state=initialState, action) => {
    switch(action.type) {
        case(CREATE_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.concat({
                    id: action.id,
                    title: action.title,
                    text: action.text
                }),
            });
        case(EDIT_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.filter(note => note.id !== action.id).concat({
                    id: action.id,
                    title: action.title,
                    text:action.text,
                }), 
            });
        case(DELETE_NOTE):
            return Object.assign({}, state, {
                notes: state.notes.filter(note => note.id !== action.id),
            });
        case(SORT_OLDEST):
            return Object.assign({}, state, {
                sortedBy: 'newest',
                notes: state.notes.sort((a, b) => a.id > b.id),
            });
        case(SORT_NEWEST):
            return Object.assign({}, state, {
                sortedBy: 'oldest',
                notes: state.notes.sort((a, b) => a.id < b.id),
            });
        default:
            return state;
    }
}