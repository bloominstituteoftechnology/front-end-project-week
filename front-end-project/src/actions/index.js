export const ADD_NOTE = "ADD_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"
export const DELETING_NOTE = "DELETING_NOTE"
export const NOT_DELETING_NOTE = "NOT_DELETING_NOTE"
export const LOAD = "LOAD"

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
export const editNote = (id, title, content) => {
    return {
        type: EDIT_NOTE,
        payload: {
            id: id,
            title: title,
            content: content
        }
    }
}
export const toggleModal = () => {
    return {
        type: DELETING_NOTE
    }
}
export const toggleModalBack = () => {
    return {
        type: NOT_DELETING_NOTE
    }
}
export const deleteNote = id => {
    return {
        type: DELETE_NOTE,
        payload: id,
    }
}