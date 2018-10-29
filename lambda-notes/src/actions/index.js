import axios from 'axios'

export const GET_ALL_NOTES = 'GET_ALL_NOTES'
export const GET_NOTE_BY_ID = 'GET_NOTE_BY_ID'
export const POST_NOTE = 'POST_NOTE'
export const PUT_NOTE = 'PUT_NOTE'
export const DELETE_NOTE = 'DELETE_NOTE'

export const getAllNotes = () => dispatch => {
  axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => dispatch({ type: GET_ALL_NOTES, payload: res.data }))
    .catch(err => console.log(err))
}

export const getNoteById = id => dispatch => {
  axios
    .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    // not sure what res is gonna looke like here
    // or how I'll fold it in with the rest of state
    .then(res => dispatch({ type: GET_NOTE_BY_ID, payload: res.data }))
    .catch(err => console.log(err))
}

export const postNote = note => dispatch => {
  axios
    .post('https://killer-notes.herokuapp.com/note/create')
    // again not sure what server will return yet
    .then(res => dispatch({ type: POST_NOTE, payload: res.data }))
    .catch(err => console.log(err))
}

export const putNote = (note, { id }) => dispatch => {
  axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`)
    .then(res => dispatch({ type: PUT_NOTE, payload: res.data }))
    .catch(err => console.log(err))
}

export const deleteNote = id => dispatch => {
  axios
    .get(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(res => dispatch({ type: GET_ALL_NOTES, payload: res.data }))
    .catch(err => console.log(err))
}