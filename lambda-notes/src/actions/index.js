
let nextNoteId = 9
export const addNote = (note, title) => {
    return {
        type: 'addNote',
        payload: { id: nextNoteId++, note: note, title: title }
       }
};

export const deleteNote = id => {

    return {
        type: 'deleteNote',
        payload: +id,

        }
};

export const updateNote = (id, title, note) => {
    
    return {
        type: 'updateNote',
        payload: { id: id, title: title, note: note }
    }
};