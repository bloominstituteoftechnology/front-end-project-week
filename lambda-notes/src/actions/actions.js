export const ADDNOTE = 'ADDNOTE';

export const addNote = (note) => {
    return {
        type: ADDNOTE,
        payload: note
    }
};
// export const addNote = (note) => {
//     return {
//         type: NEWNOTE,
//         payload: note
//     }
// };