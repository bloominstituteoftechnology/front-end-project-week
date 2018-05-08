export const deleteNote = id => {
    return {
        type:'DELETE',
        payload:id
    }
}