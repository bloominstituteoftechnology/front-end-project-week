
export const ADD_NOTE = 'ADD_NOTE';

const addNote = (note) => {
    return {
        type: ADD_NOTE,
        payload: note,
    }
};
export default addNote;