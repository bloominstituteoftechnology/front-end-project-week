// export const a = 'ADD_NOTE';

export const addNote = (note) => (

     {
        type: 'addNote',
        payload: note,
    }
);
