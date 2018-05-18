import axios from 'axios';
import response from './dummyData';

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const FETCHED_NOTES = 'FETCHED_NOTES'
export const SELECTING_NOTE = 'SELECTING_NOTE'
export const ADDING_NOTE = 'ADDING_NOTE'
export const UPDATING_NOTE = 'UPDATING_NOTE'
export const DELETING_NOTE = 'DELETING_NOTE'

export const getNotes = () => {
    // FETCHING NOTES
    return { type: FETCHED_NOTES, notes: response.data}
}

export const selectNote = (note) => {
    // FETCHING ONE NOTE
    return { type: SELECTING_NOTE, note }
}

export const addNote = () => {
    return { type: ADDING_NOTE }
}

export const updateNote = (note) => {
    // return { type: UPDATING_NOTE, notes: response.data}
    return { type: UPDATING_NOTE, note }
}

export const deleteNote = (id) => {
    // return { type: DELETING_NOTE, notes: response.data}
    let noteList = response.data
    let notes = noteList.filter(note => note.id !== id)
    console.log(notes)
    return { type: FETCHED_NOTES, notes }
}

export const saveNote = (note) => {
    // return { type: FETCHED_NOTES, notes: response.data}
    note.id = note.title // todo: create database for fetching return
    let noteList = response.data
    noteList.push(note)
    return { type: FETCHED_NOTES, notes: noteList }
}