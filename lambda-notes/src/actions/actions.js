export const ADDNOTE = 'ADDNOTE';
export const GETNOTE = 'GETNOTE';
export const DELETENOTE = 'DELETENOTE';
export const UPDATENOTE = 'UPDATENOTE';
export const SEARCH = 'SEARCH';

export const addNote = (note) => {
    return {
        type: ADDNOTE,
        payload: note
    }
};
export const getNote = (id) => {
    return {
        type: GETNOTE,
        payload: id,
    }
};
export const updateNote = (note) => {
    return {
        type: UPDATENOTE,
        payload: note,
    }
};
export const deleteNote = (id) => {
    return {
        type: DELETENOTE,
        payload: id,
    }
};
export const search = (text) => {
    return {
        type: SEARCH,
        payload: text,
    }
};
// export const addNote = (note) => {
//     return {
//         type: NEWNOTE,
//         payload: note
//     }
// };