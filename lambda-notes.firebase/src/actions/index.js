import { notesRef } from "../config/firebase";

import { FETCHING_NOTES, FETCHED_NOTES, ERROR } from "./types";

export const addNote = newNote => async dispatch => {
  notesRef.push().set(newNote);
};

export const updateNote = (updateNoteId, note) => async dispatch => {
    notesRef.child(updateNoteId).update(note);
  };
  
export const removeNote = removeNoteId => async dispatch => {
  notesRef.child(removeNoteId).remove();
};

export const fetchNotes = () => {
    return (dispatch) => {
        dispatch({ type: FETCHING_NOTES })
        
        notesRef.on("value", 
        response => {
            const data = response.val();
            const notes = Object.keys(data).map(key => {
                    return ({
                        id: key,
                        title: data[key].title,
                        content: data[key].content
                    })
            });
            dispatch({ type: FETCHED_NOTES, notes: notes})
        }, 
        error => {
            dispatch({ type: ERROR, error: error.code })
        });
    }
}