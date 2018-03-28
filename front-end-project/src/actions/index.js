import axios from 'axios';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED  ='NOTE_ADDED';
export const ERROR_ADDING_NOTE ='ERROR_ADDING_NOTE';
let noteId = 10;

export const addNote = (note) => {
    return {
        type:ADDING_NOTE,
        id:noteId++,
        note
    }
}