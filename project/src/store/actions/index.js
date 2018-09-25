import axios from "axios";

export const NOTES_FETCH_START = "NOTES_FETCH_START";
export const NOTES_FETCH_COMPLETE = "NOTES_FETCH_COMPLETE";
export const NOTES_FETCH_ERROR = "NOTES_FETCH_ERROR";

export const ADD_NOTE_START = "NOTES_NOTE_START";
export const ADD_NOTE_COMPLETE = "NOTES_NOTE_COMPLETE";
export const ADD_NOTE_ERROR = "NOTES_NOTE_ERROR";

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_COMPLETE = "DELETE_NOTE_COMPLETE";
export const DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR";

export const UPDATE_NOTE_START = "UPDATE_NOTE_START";
export const UPDATE_NOTE_COMPLETE = "UPDATE_NOTE_COMPLETE";
export const UPDATE_NOTE_ERROR = "UPDATE_NOTE_ERROR";

export const SET_UPDATE_NOTE = "SET_UPDATE_NOTE";

export const getNotes = () => dispatch => {
  dispatch({ type: NOTES_FETCH_START });
  const promise = axios.get("https://killer-notes.herokuapp.com/note/get/all");

  promise
    .then(response => {
      dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: NOTES_FETCH_ERROR, payload: err });
    });
};

export const addNewNote = note => dispatch => {
  dispatch({ type: ADD_NOTE_START });

  axios
    .post("https://killer-notes.herokuapp.com/note/create", note)
    .then(response => {
      dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ADD_NOTE_ERROR, payload: err });
    });
};

export const deleteNote = noteId => dispatch => {
  dispatch({ type: DELETE_NOTE_START });

  axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: DELETE_NOTE_ERROR, payload: err });
    });
};

export const setUpdateNote = id => {
  return {
    type: SET_UPDATE_NOTE,
    payload: id
  };
};

export const updateNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTE_START });

  axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note.id}`, note)
    .then(response => {
      dispatch({ type: UPDATE_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: UPDATE_NOTE_ERROR, payload: err });
    });
};
