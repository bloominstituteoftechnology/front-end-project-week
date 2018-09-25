import axios from "axios";
export const DELETE_NOTE = "DELETE_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const CREATE_NOTE = "CREATE_NOTE";
export const FETCH_NOTE = "FETCH_NOTE";
export const FETCH_NOTE_ID = "FETCH_NOTE_ID";


export const deleteNote = id => {
  axios.delete("https://killer-notes.herokuapp.com/note/delete/id")
  return {
    type: DELETE_NOTE,
    payload: id
  };
};

export const editNote = noteData => {
  return {
    type: EDIT_NOTE,
    payload: noteData
  };
};

export const createNote = noteData => {
  return {
    type: CREATE_NOTE,
    payload: noteData
  };
};
