export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

// 
let nextId = 0;
export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        text: note,
        id: ++nextId,
    };
};

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}