export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTES = "VIEW_NOTES";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note
    }
}

export const viewNotes = (notes) => {
    return {
        type: VIEW_NOTES
    }
}

export const editNote = (note, id) => {
    return {
        type: EDIT_NOTE,
        payload: {note: note, id: id}
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: { id }
    }
}