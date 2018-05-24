import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actions';

// { noteText: 'Stuff', edited: false}

let initialState = [
    {
    title: "Hey",
    body: "I am a note",
    id: 1
    },
    {
    title: "This",
    body: "Another note",
    id: 2
    }
]

const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    // initialState = JSON.parse(localStorage.getItem('array'));
    return initialState === null ? [] : initialState;
}

export default (state = retrieveData(), action) => {
    switch (action.type) {
        case ADD_NOTE:
            const addNoteState = Array.from(state);
            addNoteState.push(action.payload);
            saveData(addNoteState);
            return addNoteState;
        case EDIT_NOTE:
            let editNoteState = Array.from(state);
            editNoteState = state.filter(note => {
                return note.id !== action.payload.id;
            })
            editNoteState.push(action.payload);
            saveData(editNoteState);
            return(editNoteState);
        case REMOVE_NOTE:
            // console.log(typeof action.payload)
            let removeNoteState = Array.from(state);
            // console.log(removeNoteState);
            removeNoteState = removeNoteState.filter(note => {
                // console.log(note)
                return note.id !== action.payload;
            });
            // console.log(removeNoteState)
            saveData(removeNoteState);
            return removeNoteState;
        default:
            return state;
    }
}