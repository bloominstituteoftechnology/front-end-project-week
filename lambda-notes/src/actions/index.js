import { notesRef } from "../config/firebase";
import { FETCH_NOTES } from "./types";

export const addNote = newNote => async dispatch => {
  notesRef.push().set(newNote);
};

export const updateNote = (updateNoteId, note) => async dispatch => {
    notesRef.child(updateNoteId).update(note);
  };
  
export const removeNote = removeNoteId => async dispatch => {
  notesRef.child(removeNoteId).remove();
};

export const fetchNotes = () => async dispatch => {
    notesRef.on("value", snapshot => {
    dispatch({
      type: FETCH_NOTES,
      payload: snapshot.val()
    });
  });
};