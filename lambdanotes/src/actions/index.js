import * as firebase from "firebase"

export const NEW_NOTE = 'NEW_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DEL_NOTE = 'DEL_NOTE';
export const ERROR = 'ERROR';

let noteIdNum = 100;

export function newNote(note) {
    return {
        type: NEW_NOTE,
        id: noteIdNum++,
        note
    };
}

export function editNote(note, id) {
    return {
        type: EDIT_NOTE,
        id,
        note
    };
}

export function delNote(id) {
    return {
        type: DEL_NOTE,
        id
    };
}

export const catchError = response => {
    return {
      type: ERROR,
      error: response
    };
  };
