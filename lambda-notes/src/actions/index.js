
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

export const deleteNote = (id) => {
    return {
        type: 'DELETE_NOTE', payload: id
    }
}