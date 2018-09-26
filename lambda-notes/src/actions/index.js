import axios from 'axios';

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCHING_NOTES_SUCCESSFUL = "FETCHING_NOTES_SUCCESSFUL";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";
export const CREATING_NOTE = "CREATING_NOTE";
export const CREATING_NOTE_SUCESSFULL = "CREATING_NOTE_SUCESSFULL";
export const CREATING_NOTE_FAILURE = "CREATING_NOTE_FAILURE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";
export const UPDATE_SUCCESSFUL = "UPDATE_SUCCESSFUL";
export const UPDATE_FAILURE = "UPDATE_FAILURE";

export const getNotes = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({type: FETCHING_NOTES});
      setTimeout(() => {
        axios
        .get('https://killer-notes.herokuapp.com/note/get/all')
        .then(resp => dispatch({type: FETCHING_NOTES_SUCCESSFUL, payload: resp.data}))
        .catch(err => dispatch({type: FETCHING_NOTES_FAILURE, payload: new Error(err)}));
      }, 3000)
    })
  }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({type: CREATING_NOTE});
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(resp => dispatch({type: CREATING_NOTE_SUCESSFULL, payload: resp.data}))
      .then(() => getNotes()(dispatch))
      .catch(err => dispatch({type: CREATING_NOTE_FAILURE, payload: new Error(err)}));
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(() => dispatch({type: DELETE_NOTE_SUCCESS}))
      .then(() => getNotes()(dispatch))
      .catch(err => dispatch({type: DELETE_NOTE_FAILURE, payload: new Error(err)}));
  }
}

export const updateNote = (note) => {
  return dispatch => {
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(() => dispatch({type: UPDATE_SUCCESSFUL}))
    .then(() => getNotes()(dispatch))
    .catch(err => dispatch({type: UPDATE_FAILURE, payload: new Error(err)}));
  }
}