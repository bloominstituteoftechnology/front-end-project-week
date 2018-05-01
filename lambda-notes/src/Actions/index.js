export const CREATE_NOTE = 'CREATE_NOTE';

export const createNote = (data) => {
    return {
        type: CREATE_NOTE,
        payload: data
    }
}