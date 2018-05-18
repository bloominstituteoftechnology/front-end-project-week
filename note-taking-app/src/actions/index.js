import axios from 'axios';
import response from './dummyData';

export const GET_NOTES = 'GET_NOTES'
export const GET_CREATE_NOTE_FORM = 'GET_CREATE_NOTE_FORM'
export const SAVE_NOTE = 'SAVE_NOTE'
export const SELECT_NOTE = 'SELECT_NOTE'

export const getNotes = () => {
    return { 
        type:  GET_NOTES
    }
}

export const getNoteForm = () => {
    return {
        type: GET_CREATE_NOTE_FORM
    }
}

export const saveNote = (note) => {
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