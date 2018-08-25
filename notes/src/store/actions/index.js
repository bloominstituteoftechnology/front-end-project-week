import React from 'react';
import { FETCHING_NOTES, NOTES_FETCHED, FETCHING_NOTE, NOTE_FETCHED, EDIT_NOTE, SAVING_NOTE, NOTE_SAVED, DELETING_NOTE, NOTE_DELETED, ADD_NOTE, ERROR } from '../action-types';
import axios from 'axios';

export const loadPage = () => {
  return function(dispatch) {
  dispatch({type: FETCHING_NOTES, message: 'Loading notes...'});
  axios.get('https://killer-notes.herokuapp.com/note/get/all')
  .then(response => {
      dispatch({type: NOTES_FETCHED, payload: response.data});
      console.log(response.data);
    })
  .catch(error => {
    dispatch({type: ERROR, message: 'Oops! We couldn\'t retrieve your notes :('})
  })
  }
};

export const homePage = (notes) => {
  return function(dispatch) {
    dispatch({type: NOTES_FETCHED, payload: notes});
  }
}

export const singleNoteView = (id) => {
  return function(dispatch) {
    console.log(id);
    dispatch({type: FETCHING_NOTE, payload: id, message: 'Loading your note...'});
    axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      console.log('response to single note view:', response);
      dispatch({type: NOTE_FETCHED, payload: response.data})
  })
  .catch(error => {
      dispatch({type: ERROR, message: 'Oops! We couldn\'t retrieve your note :('})
    })
  }
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
    })
    .catch(error => {
        dispatch({type: ERROR, message: 'Oops! We couldn\'t save your note :('})
      })
  }
}

export const saveEditedNote = (note) => {
  console.log('Note to be saved:', note);
  return function(dispatch) {
    dispatch({type: SAVING_NOTE, payload: note, message: 'Saving your changes...'});
    axios.put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(response => {
      console.log('response:', response)
      dispatch({type: NOTE_SAVED, payload: response.data, message: `Changes to your note ${note.title} have been saved! Taking you home...`});
    })
    .catch(error => {
        dispatch({type: ERROR, message: 'Oops! We couldn\'t save your note :('})
      })
  }
}

export const deleteNote = (note) => {
  return function(dispatch) {
    dispatch({type: DELETING_NOTE, payload: note, message: `Sending \"${note.title}\" to the garbage...`});
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${note._id}`)
    .then(response => {
      dispatch({type: NOTE_DELETED, message: 'Your note is toast! Taking you home...'});
    })
    .catch(error => {
        dispatch({type: ERROR, message: 'Oops! We couldn\'t delete your note :('})
      })
  }
}

export const addNote = () => {
  return function(dispatch) {
    dispatch({type: ADD_NOTE})
  }
}
