import axios from "axios";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_NOTES = "GET_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE = "UPDATE_NOTE";
export const FETCH_NOTE = "FETCH_NOTE";
export const ADD_NOTE = "ADD_NOTE";

const URL = "https://onedrousdev.herokuapp.com/api";

export const fetchNotes = () => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`${URL}/notes`)
    .then(res => {
      dispatch({ type: GET_NOTES, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "There was an error loading notes."
      });
    });
};

export const fetchNote = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .get(`${URL}/notes/${id}`)
    .then(res => {
      dispatch({ type: FETCH_NOTE, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "There was an error fetching your note!"
      });
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
      dispatch({
        type: ERROR,
        errorMessage: "A new note cannot be created at this time."
      });
    });
};

export const deleteNote = id => dispatch => {
  dispatch({ type: LOADING });
  axios
    .delete(`${URL}/delete/${id}`)
    .then(res => {
      console.log(res.data);
      dispatch({ type: UPDATE_NOTE, payload: res.data });
    })
    .then(res => {
      dispatch(fetchNotes());
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "This note cannot be deleted at this time."
      });
    });
};

export const editNote = editedNote => dispatch => {
  dispatch({ type: LOADING });
  axios
    .put(`${URL}/edit/${editedNote.id}`, editedNote)
    .then(res => {
      console.log(res.data);
      dispatch({ type: UPDATE_NOTE, payload: res.data });
    })
    .then(() => {
      dispatch(fetchNotes());
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "This note cannont be updated at this time."
      });
    });
};
