export const DELETE = 'DELETE';

export const deleteNote = (id) => {
    return {
        type: DELETE,
        payload: id
    }
}