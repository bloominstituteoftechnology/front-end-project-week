export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REORDER_NOTES = 'REORDER_NOTES';

export const addNote = data => {
    return {
        type: ADD_NOTE,
        title: data.title,
        text: data.text,
        id: Math.floor((Math.random() * 1000) + 1),
    };
};

export const updateNote = data => ({
    type: UPDATE_NOTE,
    // QUESTION: Better to do this here or in reducers???
    id: Number(data.id),
    title: data.title,
    text: data.text,
  });

export const deleteNote = data => ({
    type: DELETE_NOTE,
    id: Number(data),
})

export const reorderNotes = (newNotes) => {
    return {
      type: 'REORDER_NOTES',
      payload: newNotes,
    }
  }