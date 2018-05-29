export const ADD_NOTE = "ADD_NOTE"
export const EDIT_NOTE = "EDIT_NOTE"
export const DELETE_NOTE = "DELETE_NOTE"
export const DELETING_NOTE = "DELETING_NOTE"
export const NOT_DELETING_NOTE = "NOT_DELETING_NOTE"
export const LOAD = "LOAD"

let nextId = 1;
let id = nextId++
export const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: {
            id: nextId++,
            note
            }
        }
    }

export const editNote = (id, note) => {
    return {
        type: EDIT_NOTE,
        payload: {
            id: id,
            note
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