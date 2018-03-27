export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

let noteId = 5;
export const createNote = note => {
    return {
        type: CREATE_NOTE,
        id: noteId++,
        heading: note.heading,
        text: note.text,
    }
}

export const editNote = note => {
    return {
        type: EDIT_NOTE,
        id: note.id,
        heading: note.heading,
        text: note.text,
    }
}

export const deleteNote = note => {
    return {
        type: DELETE_NOTE,
        id: note.id,
        heading: note.heading,
        text: note.text,
    }
}