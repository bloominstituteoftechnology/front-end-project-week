export const FETCH_NOTES = "FETCH_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let noteId = 2;

export const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: [
      { id: 1, title: "redux", context: 'Redux is ...' },
      { id: 2, title: "tips for front-end development", context: 'Students who...' }
    ]
  };
};

export const createNote = note => {
  noteId += 1;
  return {
    type: CREATE_NOTE,
    payload: {
      id: noteId,
      title: note.title,
      context: note.context
    }
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
