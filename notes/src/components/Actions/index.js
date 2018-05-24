import { notesRef } from '../config/firebase'

export const FETCH_NOTES = 'FETCH_NOTES'
export const ADD_NOTE = 'ADD_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const addNote = newNote => async dispatch => {
    notesRef.push().set(newNote)
};

export const deleteNote = key => async disptach => {
    notesRef.child(key).remove()
}

export function fetchNotes() {
    return dispatch => {
        notesRef.on("value", snapshot => {
            dispatch({
                type: FETCH_NOTES,
                payload: snapshot.val()
            })
        })
    }
}