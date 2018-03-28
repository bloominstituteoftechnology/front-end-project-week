export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';


let nextId = 6;
export const addNote = note => {

    return {
        type: ADD_NOTE,
        note: note,
        title: note.title,
        text: note.text,
        id: ++nextId,
    };
};

export const updateNote = data => ({
    type: UPDATE_NOTE,
    id: data.id,
    title: data.title,
    body: data.body,
  });