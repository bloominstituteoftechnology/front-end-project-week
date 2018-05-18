import axios from 'axios';
import response from './dummyData';

export const GET_NOTES = 'GET_NOTES'
export const GET_CREATE_NOTE_FORM = 'GET_CREATE_NOTE_FORM'
export const UPDATE_NOTE = 'UPDATE_NOTE'
export const SAVE_NOTE = 'SAVE_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'
export const GET_EDIT_NOTE_FORM = 'GET_EDIT_NOTE_FORM'
export const SELECT_NOTE = 'SELECT_NOTE'

export const getNotes = () => {
    return { 
        type:  GET_NOTES
    }
}

export const getCreateNoteForm = () => {
    return (dispatch) => {
        dispatch({type: GET_CREATE_NOTE_FORM})
    }
}

export const saveNote = (note) => {
    if (note.id) {
        return {
            type: UPDATE_NOTE,
            note
        }
    }
    return {
        type: SAVE_NOTE,
        note
    }
}

export const selectNote = (note) => {
    return {
        type: SELECT_NOTE,
        note
    }
}

export const getEditNoteForm = (note) => {
    return {
        type: GET_EDIT_NOTE_FORM,
        note
    }
}

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        id
    }
}