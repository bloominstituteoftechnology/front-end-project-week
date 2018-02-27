export const ADDNOTE = 'ADDNOTE';

export const addNote = (note) => {
    return {
        type: ADDNOTE,
        payload: note
    }
};