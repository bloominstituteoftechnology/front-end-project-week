export const ADD_NOTE = 'ADD_NOTE';

export function addNote(note) {
    return {
        type: ADD_NOTE,
        note
    };
}