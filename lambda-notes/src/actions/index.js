export const FETCH_NOTES = 'FETCH_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SEARCH_NOTE = 'SEARCH_NOTE';

export const fetchNotes = () => {
    return {
        type: FETCH_NOTES
    }
}

export const addNote = newNote => {
    return {
        type: ADD_NOTE,
        payload: newNote
    }
}

export const deleteNote = id => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const editNote = editedNote => {
    return {
        type: EDIT_NOTE,
        payload: editedNote
    }
}

export const searchNote =  title => {
    return {
        type: SEARCH_NOTE,
        payload: title
    }
}

