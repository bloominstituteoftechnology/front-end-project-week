
export const createNote = note => {
    return {
        type:'CREATE',
        payload:note
    }
}