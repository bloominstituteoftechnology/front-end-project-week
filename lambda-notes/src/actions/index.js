export const CREATE_NOTE = "CREATE_NOTE";
export const GET_NOTE = "GET_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let noteId = 2;



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

// export const getNote = id => {
//     return {
//         type: GET_NOTE,
//         payload: id
//     };
// };

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
