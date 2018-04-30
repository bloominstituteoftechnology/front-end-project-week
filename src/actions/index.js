import axios from "axios";

export const ADD_NOTE = "ADD_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const GETTING = "GETTING";
export const GOT = "GOT";

let noteId = 10;

export function addNote(note) {
  return {
    type: ADD_NOTE,
    id: noteId++,
    note
  };
}

export function deleteNote(id) {
  return {
    type: DELETE_NOTE,
    id
  };
}

export function editNote(note, id) {
  return {
    type: EDIT_NOTE,
    note,
    id
  };
}

export const getNotes = () => dispatch => {
  dispatch({ type: GETTING });
  axios
    .get("https://floating-mesa-40947.herokuapp.com/api/notes")
    .then(response => {
      console.log(response);
      dispatch({ type: GOT, notes: response.data });
    });
};
