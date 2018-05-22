export const FETCH_NOTES = "FETCH_NOTES";
export const CREATE_NOTE = "CREATE_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

let id = 2;

export const fetchNotes = () => {
  return {
    type: FETCH_NOTES,
    payload: [
      { id: 1, title: "laundry", context: false },
      { id: 2, title: "work out", context: false }
    ]
  };
};

export const createNote = note => {
  id += 1;
  return {
    type: CREATE_NOTE,
    payload: {
      id: id,
      title: note,
      context: false
    }
  };
};

export const deleteNote = id => {
  return {
    type: DELETE_NOTE,
    payload: id
  };
};
