import axios from "axios";

export const ERROR = "ERROR";
export const GETTING_NOTES = "GET_NOTE";
export const GET_NOTES = "GET_NOTES";
export const POSTING_NOTES = "POSTING_NOTES";
export const POST_NOTE = "POST_NOTE";
export const DELETING_NOTE = "DELETING_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const UPDATE_NOTE_START = "UPDATE_NOTE_START";
export const UPDATE_NOTE_COMPLETE = "UPDATE_NOTE_COMPLETE";
export const SET_UPDATE_NOTE = "SET_UPDATE_NOTE";
export const SINGLE_NOTE = "SINGLE_NOTE";

export const getNote = () => {
  return dispatch => {
    dispatch({ type: GETTING_NOTES });
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        dispatch({ type: GET_NOTES, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const postNote = note => {
  return dispatch => {
    dispatch({ type: POSTING_NOTES });
    axios
      .post("https://killer-notes.herokuapp.com/note/create", note)
      .then(response => {
        dispatch({ type: POST_NOTE, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = noteId => dispatch => {
  dispatch({ type: DELETING_NOTE });

  axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE, payload: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err });
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
      dispatch({ type: ERROR, payload: err });
    });
};

export const singleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};
