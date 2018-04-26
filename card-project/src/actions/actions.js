
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const CHECK_UPDATE = 'CHECK_UPDATE';
let notes = [];
let titles = [];
 export const addNote = (note) => {
     return {
         type: ADD_NOTE,
         payload: note
     }
 };
 export const updateNote = (noteTitle, noteContent, i) => {
    return {
        type: UPDATE_NOTE,
        title: noteTitle,
        payload: noteContent,
        index: i
    }
};
export const checkUpdate = (bool, i) => {
    return {
        type: CHECK_UPDATE,
        payload: bool,
        index: i
    }
}
 export const deleteNote = (note) => {
     return {
         type: DELETE_NOTE,
         payload: note
     }
 }