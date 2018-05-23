import { ADD_NOTE, EDIT_NOTE, REMOVE_NOTE } from '../actions';

// { noteText: 'Stuff', edited: false}

let initialState = []

const saveData = (array) => {
    return localStorage.setItem('array', JSON.stringify(array));
}

const retrieveData = () => {
    initialState = JSON.parse(localStorage.getItem('array'));
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
            const editNoteState = Array.from(state);
            editNoteState[action.payload].edited === true ?
                editNoteState[action.payload].edited = false :
                editNoteState[action.payload].edited = true;
            saveData(editNoteState);
            return editNoteState;
        case REMOVE_NOTE:
            const removeNoteState = Array.from(state);
            removeNoteState.splice(action.payload, 1);
            saveData(removeNoteState);
            return removeNoteState;
        default:
            return state;
    }
}