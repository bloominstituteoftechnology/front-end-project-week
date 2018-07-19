export const MAKE_NOTE = 'MAKE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const makeNote = (data) => {
    return {
        type: MAKE_NOTE,
        payload: data
    }
}

export const editNote = (data) => {
    return {
        type: EDIT_NOTE,
        payload: data
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}