export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const GET_NOTES = 'GET_NOTES';

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        payload: data
    }
}

export const deleteNote = (data) => {
    return {
        type: DELETE_NOTE,
        id: data,
    }
}

export const getNotes = () => {
    return {
        type: GET_NOTES,
    }
}