export const SHOW_ALL_NOTES = "SHOW_ALL_NOTES";
export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const fetchNotes = () => {
  return {type: SHOW_ALL_NOTES};
}

export const addNote = note => {
  return {type: ADD_NOTE, payload: note}
}

export const deleteNote = note => {
  return {type: DELETE_NOTE, payload: note}
}