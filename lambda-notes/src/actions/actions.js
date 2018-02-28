export const ADDNOTE = 'ADDNOTE';
export const GETNOTE = 'GETNOTE';

export const addNote = (note) => {
    return {
        type: ADDNOTE,
        payload: note
    }
};
export const getNote = (id) => {
    return {
        type: GETNOTE,
        payload: id
    }
};
// export const addNote = (note) => {
//     return {
//         type: NEWNOTE,
//         payload: note
//     }
// };