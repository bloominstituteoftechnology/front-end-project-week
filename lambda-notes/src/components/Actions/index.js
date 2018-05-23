import { notesRef } from '../../config/firebase';

export const ADD = "ADD";
export const EDIT = "EDIT";
export const FETCH = "FETCH";
export const DELETE = "DELETE";

export const addNote = note => async dispatch => {
  note = { ...note, date: Date.now() }
  notesRef.push().set(note);
};

export const editNote = (id, note) => async dispatch => {
  notesRef.child(id).set(note);
};

export const fetchNotes = () => async dispatch => {
  notesRef.on("value", snapshot => {
    dispatch({
      type: FETCH,
      payload: snapshot.val(),
    });
  });
};

export const deleteNote = id => async dispatch => {
  notesRef.child(id).remove();
};