export const DELETE_NOTE = 'DELETE_NOTE';

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}
