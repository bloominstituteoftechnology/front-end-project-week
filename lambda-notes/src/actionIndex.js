export const ADD_NOTE = 'ADD_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const MARK_COMPLETE = 'MARK_COMPLETE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const addNote = note => {
    return {
        type: ADD_NOTE,
        note
    }
}

export const UpdateNote = note => {
    return {
        type: UPDATE_NOTE,
        note
    }
}

export const markComplete = index => {
    return {
        type: MARK_COMPLETE,
        note
    }
}

export const deleteNote = index => {
    return {
        type: DELETE_NOTE,
        index
    }
}