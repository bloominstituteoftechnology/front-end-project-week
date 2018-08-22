import axios from 'axios';

export const FETCHING_DATA = "FETCHING_DATA";
export const DATA_FETCHED = "DATA_FETCHED";
export const ERROR = "ERROR";
export const FETCHING_NOTE = "FETCHING_NOTE";
export const NOTE_FETCHED = "NOTE_FETCHED";
export const ADD_NOTE = "ADD_NOTE";
export const NOTE_ADDED = "NOTE_ADDED";
export const DELETE_NOTE = "DELETE_NOTE";
export const NOTE_DELETED = "NOTE_DELETED";
export const EDIT_NOTE = "EDIT_NOTE";
export const NOTE_EDITED = "NOTE_EDITED";

export const fetchData = () => {
  return function(dispatch) {
      dispatch({ type: FETCHING_DATA });
      axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
      .then(response => {
          dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const fetchNote = (id) => {
    return function(dispatch) {
        dispatch({ type: FETCHING_NOTE });
        axios
        .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => {
            dispatch({ type: NOTE_FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
   }
  }

export const addNewNote = (title, content) => {
  return function(dispatch) {
      dispatch({ type: ADD_NOTE });
      axios
     .post(`https://killer-notes.herokuapp.com/note/create`, {
      title: title,
      textBody: content
      })
      .then(response => {
          //console.log(response);
          //console.log(response.data);
          dispatch({ type: NOTE_ADDED, payload: response });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const deleteNote = id => {
  return function(dispatch) {
      dispatch({ type: DELETE_NOTE });
      axios
     .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(() => {
          dispatch({ type: NOTE_DELETED });
      })
      .then(() => {
        window.location.replace("/");
    })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}

export const editNote = (title, content, id) => {
  return function(dispatch) {
      dispatch({ type: EDIT_NOTE });
      axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {
        title: title,
        textBody: content
          })
      .then(response => {
          dispatch({ type: NOTE_EDITED, payload: response.data });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
 }
}