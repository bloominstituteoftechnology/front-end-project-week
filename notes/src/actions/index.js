export const DELETE = 'DELETE';
export const EDIT = 'EDIT';
export const CREATE = 'CREATE';

export const deleteNote = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}

export const editNote = (note) => {
    return {
        type: EDIT,
        payload: note
    }
}

export const createNote = (note) => {
    return {
        type: CREATE,
        payload: note
    }
}