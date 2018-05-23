export const ADD_NOTE = "ADD_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"

let nextId = 1;
export const addNote = (title, content) => {
    return {
        type: ADD_NOTE,
        payload: {
            id: nextId++,
            title: title,
            content: content,
        }
    }
}
export const editNote = id => {
    return {
        type: EDIT_NOTE,
        payload: id,
    }
}
export const deleteNote = id => {
    return {
        type: DELETE_NOTE,
        payload: id,
    }
}