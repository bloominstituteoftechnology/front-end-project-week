import axios from 'axios'
import {
  FETCH_NOTES,
  NOTES_FETCHED,
  FETCH_NOTE,
  NOTE_FETCHED,
  CREATE_NOTE,
  NOTE_CREATED,
  UPDATE_NOTE,
  NOTE_UPDATED,
  DELETE_NOTE,
  NOTE_DELETED,
  ERROR,
} from '../actions/types'

const ROOT_URL = 'http://localhost:7000/api/notes'

const propagateErrorMsg = error => ({ type: ERROR, error })

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES })
  axios.get(`${ROOT_URL}`)
    .then(({ data }) => dispatch({ type: NOTES_FETCHED, payload: data }))
    .catch(error => dispatch(propagateErrorMsg(error)))
}

export const addNote = content => dispatch => {
  dispatch({ type: CREATE_NOTE })
  axios.post(`${ROOT_URL}`, content)
    .then(response => {
      dispatch({ type: NOTE_CREATED })
      dispatch(getNotes())
    })
    .catch(error => dispatch(propagateErrorMsg(error)))
}

export const getOne = id => dispatch => {
  dispatch({ type: FETCH_NOTE })
  axios.get(`${ROOT_URL}/${id}`)
    .then(({ data }) => dispatch({ type: NOTE_FETCHED, payload: data }))
    .catch(error => dispatch(propagateErrorMsg(error)))
}

export const updateNote = (id, content) => dispatch => {
  dispatch({ type: UPDATE_NOTE, payload: { id, content } })
  axios.put(`${ROOT_URL}/${id}`, content)
    .then(_ => {
      dispatch({ type: NOTE_UPDATED })
      dispatch(getNotes())
    })
    .catch(error => dispatch(propagateErrorMsg(error)))
}

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE })
  axios.delete(`${ROOT_URL}/${id}`, id)
    .then(_ => {
      dispatch({ type: NOTE_DELETED })
      dispatch(getNotes())
    })
    .catch(error => dispatch(propagateErrorMsg(error)))
}

