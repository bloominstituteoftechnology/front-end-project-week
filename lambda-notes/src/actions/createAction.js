let id = 0
export const createNote = note => {
    return {
        type:'CREATE',
        payload:{...note,id:id++}
    }
}