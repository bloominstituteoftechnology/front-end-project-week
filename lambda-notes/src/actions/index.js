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

export const fetchData = (token) => {
  return function(dispatch) {
      dispatch({ type: FETCHING_DATA });
      axios
      .get(`https://lambda-notes-api.herokuapp.com/api/notes`, token)
      .then(response => {
          //console.log(response.data)
          dispatch({ type: DATA_FETCHED, payload: response.data });
      })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
    }
}

export const fetchNote = (id, token) => {
    return function(dispatch) {
        dispatch({ type: FETCHING_NOTE });
        axios
        .get(`https://lambda-notes-api.herokuapp.com/api/notes/${id}`, token)
        .then(response => {
            //console.log(response.data)
            dispatch({ type: NOTE_FETCHED, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, payload: error });
        })
    }
}

export const addNewNote = (title, content, token) => {
  return function(dispatch) {
      dispatch({ type: ADD_NOTE });
      axios
     .post(`https://lambda-notes-api.herokuapp.com/api/notes`, {
      title: title,
      textBody: content
      }, token)
      .then(response => {
          dispatch({ type: NOTE_ADDED, payload: response.data });
      })
      .then(() => {
        window.location.replace("/notes");
        })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
    }
}

export const deleteNote = (id, token) => {
  return function(dispatch) {
      dispatch({ type: DELETE_NOTE });
      axios
     .delete(`https://lambda-notes-api.herokuapp.com/api/notes/${id}`, token)
      .then(() => {
          dispatch({ type: NOTE_DELETED });
      })
      .then(() => {
        window.location.replace("/notes");
    })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
    }
}

export const editNote = (title, content, id, token) => {
  return function(dispatch) {
      dispatch({ type: EDIT_NOTE });
      axios
      .put(`https://lambda-notes-api.herokuapp.com/api/notes/${id}`, {
        title: title,
        textBody: content
        }, token)
      .then(() => {
          dispatch({ type: NOTE_EDITED });
      })
      .then(() => {
        window.location.replace("/notes");
    })
      .catch(error => {
          dispatch({ type: ERROR, payload: error });
      })
    }
}