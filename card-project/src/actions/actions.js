
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

let notes = [];
let titles = [];
 export const addNote = (note) => {
     return {
         type: ADD_NOTE,
         payload: note
     }
 };
 export const updateNote = (note, i) => {
    return {
        type: UPDATE_NOTE,
        payload: note,
        index: i
    }
};
 export const deleteNote = (note) => {
     return {
         type: DELETE_NOTE,
         payload: note
     }
 }