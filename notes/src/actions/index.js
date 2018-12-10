import axios from 'axios';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_SINGLE_NOTE = 'FETCH_SINGLE_NOTE';
export const FETCH_SINGLE_NOTE_SUCCESS = 'FETCH_SINGLE_NOTE_SUCCESS';
export const ERROR = 'ERROR';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const DELETE_NOTE_SUCCESS= 'DELETE_NOTE_SUCCESS';
export const UPDATE_NOTE_SUCCESS= 'UPDATE_NOTE_SUCCESS';

export const TOGGLE_DELETE_NOTE = 'TOGGLE_DELETE_NOTE';

export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';

export const SINGLE_NOTE = 'SINGLE_NOTE';




const url = 'https://fe-notes.herokuapp.com/note/'
// const url = 'https://lambda-notes-backend-kf.herokuapp.com/'

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES })
  axios
    .get(`${url}get/all`)
    .then(response => {
      dispatch({
        type: FETCH_NOTES_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
}

export const getSingleNote = id => dispatch => {
  dispatch({ type: FETCH_SINGLE_NOTE })
  axios
    .get(`${url}get/${id}`)
    .then(response => {
      dispatch({
        type: FETCH_SINGLE_NOTE_SUCCESS,
        payload: response.data
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
}

export const addNote = note => dispatch => {
  axios
    .post(`${url}create`, note)
    .then(response => {
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: response.data
      })
    })
    .then(() => getNotes()(dispatch))
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
}

export const deleteNote = id => dispatch => {
  axios
    .delete(`${url}delete/${id}`)
    .then(response => {
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: id
      })
      dispatch({
        type: SINGLE_NOTE, 
        payload: {}
      })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
}

export const updateNote = updatedNote => dispatch => {
  axios
    .put(`${url}edit/${updatedNote.id}`, updatedNote)
    .then(response => {
      dispatch({
        type: UPDATE_NOTE_SUCCESS,
        payload: response.data
      })
      // dispatch({
      //   type: SINGLE_NOTE, 
      //   payload: {}
      // })
    })
    .catch(error => {
      dispatch({
        type: ERROR,
        payload: error
      })
    })
}

export const toggleDeleteNote = () => {
  return {
    type: TOGGLE_DELETE_NOTE
  }
}

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_NOTE
  }
}

export const updateSingleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  }
}

/* https://fe-notes.herokuapp.com/note/get/all

a `GET` request to this route will return a list of all the notes.

### https://fe-notes.herokuapp.com/note/get/id

a `GET` request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

### https://fe-notes.herokuapp.com/note/create

a `POST` request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

### https://fe-notes.herokuapp.com/note/edit/id

a `PUT` request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

### https://fe-notes.herokuapp.com/note/delete/id

a `DELETE` */