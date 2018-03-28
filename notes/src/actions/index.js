export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SORT_NEWEST = 'SORT_NEWEST';
export const SORT_OLDEST = 'SORT_OLDEST';

let noteId = 6;
export const createNote = note => {
    return {
        type: CREATE_NOTE,
        id: noteId++,
        title: note.title,
        text: note.text,
    }
}

export const editNote = note => {
    return {
        type: EDIT_NOTE,
        id: note.id,
        title: note.title,
        text: note.text,
    }
}

export const deleteNote = note => {
    return {
        type: DELETE_NOTE,
        id: note.id,
        title: note.title,
        text: note.text,
    }
}

export const sortNewest = () => {
    return {
        type: SORT_NEWEST,
    }
}

export const sortOldest = () => {
    return {
        type: SORT_OLDEST,
    }
}