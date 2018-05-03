export const ADD_NOTE = 'ADD_NOTE';
export const GET_NOTES = 'GET_NOTES'

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        payload: data
    }
}

export const getNotes = (data) => {
    return {
        type: GET_NOTES,
        payload: data
    }
}