import axios from "axios";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_NOTES = "GET_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const FETCH_NOTE = "FETCH_NOTE";
export const ADD_NOTE = 'ADD_NOTE'

const URL = "https://lambda-schools-notes.herokuapp.com/";

export const fetchNotes = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`${URL}/get/all`)
    .then(res => {
      dispatch({ type: GET_NOTES, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Error Loading Notes" });
    });
};

export const addNote = newNote => dispatch => {
  dispatch({ type: LOADING });
  axios
    .post(`${URL}/create`, newNote)
    .then(res => {
      console.log(res.data);
      dispatch(fetchNotes());
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Can not create note" });
    });
};

export const deleteNote = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`${URL}/delete/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({type: UPDATE_NOTE, payload: res.data });
    })
    .then(res => {
      dispatch(fetchNotes())
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "Error, can not delete this note"
      });
    });
};

export const editNote = editedNote => dispatch => {
  dispatch({ type: LOADING });
  axios
    .put(`${URL}/edit/${editedNote.id}`, editedNote)
    .then(res => {
      console.log(res.data)
      dispatch({type: UPDATE_NOTE, payload: res.data})
    })
    .then(() => {
      dispatch(fetchNotes())
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "Update Error, note not updated"
      });
    });
};

export const fetchNote = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`${URL}/get/${id}`)
    .then(res => {
      dispatch({ type: FETCH_NOTE, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "FETCH NOTE, Error can not reach api"
      });
    });
};
