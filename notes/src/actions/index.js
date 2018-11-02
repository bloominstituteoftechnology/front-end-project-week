import axios from 'axios';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const ERROR = 'ERROR';

const url = 'https://fe-notes.herokuapp.com/note/'

export const getNotes = () => {
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