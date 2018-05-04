export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (data) => {
    return {
        type: ADD_NOTE,
        payload: data
    }
}