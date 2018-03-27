export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';


let nextId = 6;
export const addNote = note => {

    return {
        type: ADD_NOTE,
        note: note,
        id: ++nextId,
        title: note.title,
        text: note.text,
    };
};