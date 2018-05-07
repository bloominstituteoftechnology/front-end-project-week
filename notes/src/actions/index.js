export const ADD_NOTE = "ADD_NOTE";
export const VIEW_NOTES = "VIEW_NOTES";

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