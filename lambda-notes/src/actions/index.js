
export const addNote = (newNote) => {
    return {
        type:'ADD_NOTE', payload: newNote
    }
}; 

export const getNote = (id) => {
    return {
        type: 'GET_NOTE', payload: id
    }
}