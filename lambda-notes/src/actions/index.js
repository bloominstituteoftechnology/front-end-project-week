export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE'

let nextId = 6;
export const addNote = data => {

    return {
        type: ADD_NOTE,
        note: data,
        title: data.title,
        text: data.text,
        id: ++nextId,
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