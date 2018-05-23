export const FETCH_NOTES = "FETCH_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let noteId = 2;

// export const fetchNotes = () => {
//   return {
//     type: FETCH_NOTES,
//     payload: []
//   };
// };

export const createNote = note => {
  noteId += 1;
  return {
    type: CREATE_NOTE,
    payload: {
      id: noteId,
      title: note.title,
      content: note.content
    }
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
