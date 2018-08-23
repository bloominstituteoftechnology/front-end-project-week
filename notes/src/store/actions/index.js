import React from 'react';
import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_NOTE, NOTE_FETCHED, EDIT_NOTE, SAVING_NOTE, NOTE_SAVED, DELETING_NOTE, NOTE_DELETED, ADD_NOTE, ERROR } from '../action-types';
import axios from 'axios';

export const loadPage = () => {
  return function(dispatch) {
  dispatch({type: FETCHING_NOTES, message: 'Loading notes...'});
  axios.get('https://killer-notes.herokuapp.com/note/get/all')
  .then(response => {
    if (response === undefined) {
      dispatch({type: ERROR, message: 'Oops! We couldn\'t retrieve your notes :('})
    } else {
      dispatch({type: NOTES_FETCHED, payload: response.data})
    }
  })
  }
};

export const singleNoteView = (id) => {
  return function(dispatch) {
    dispatch({type: FETCHING_NOTE, payload: id, message: 'Loading your note...'});
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      if (response === undefined) {
        dispatch({type: ERROR, message: 'Oops! We couldn\'t retrieve your notes :('})
    } else {
      dispatch({type: NOTE_FETCHED, payload: response})
    }
  })}
}

export const editNote = (note) => {
  return function(dispatch) {
    dispatch({type: EDIT_NOTE, payload: note});
  }
}

export const saveNewNote = (note) => {
  return function(dispatch) {
    dispatch({type: SAVING_NOTE, payload: note, message: 'Saving your note...'});
    axios.post('https://killer-notes.herokuapp.com/note/create', note)
    .then(response => {
      dispatch({type: NOTE_SAVED, payload: response, message: `Your note was saved with the following id number: ${response}. Taking you home...`});
      setTimeout(() => {loadPage(), 1500});
    })
  }
}

export const saveEditedNote = (note) => {
  return function(dispatch) {
    dispatch({type: SAVING_NOTE, payload: note, message: 'Saving your changes...'});
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${note.id}`, note)
    .then(response => {
      dispatch({type: NOTE_SAVED, payload: response, message: `Changes to your note \"${response.title}\" have been saved! Taking you home...`});
      setTimeout(() => {loadPage(), 1500});
    })
  }
}

export const deleteNote = (note) => {
  return function(dispatch) {
    dispatch({type: DELETING_NOTE, payload: note});
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${note.id}`)
    .then(response => {
      dispatch({type: NOTE_DELETED});
      setTimeout(() => {loadPage(), 2500});
    })
  }
}

export const addNote = () => {
  return function(dispatch) {
    dispatch({type: ADD_NOTE})
  }
}
