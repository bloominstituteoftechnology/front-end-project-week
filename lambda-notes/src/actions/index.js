// export const a = 'ADD_NOTE';
let nextNoteId = 8
export const addNote = (note, title) => {
    return {
        type: 'addNote',
        payload: { note: note, title: title }
       }
};

export const deleteNote = id => {

    return {
        type: 'deleteNote',
        payload: +id,

        }
};

// export const updateNote = (id, title, note) => {
    
//     return {
//         type: 'updateNote',
//         payload: {id: nextNoteId++, title:}
//     }
// }