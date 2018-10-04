import axios from "axios";
export const NOTES_FETCH_START = "NOTES_FETCH_START";
export const NOTES_FETCH_COMPLETE = "NOTES_FETCH_COMPLETE";
export const NOTES_FETCH_ERROR = "NOTES_FETCH_ERROR ";

export const ADD_NOTE_START = "ADD_NOTE_START ";
export const ADD_NOTE_COMPLETE = "ADD_NOTE_COMPLETE ";
export const ADD_NOTE_ERROR = "ADD_NOTE_ERROR ";

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_COMPLETE = "DELETE_NOTE_COMPLETE";
export const DELETE_NOTE_ERROR = "DELETE_NOTE_ERROR";

export const UPDATE_NOTE_START = "UPDATE_NOTE_START";
export const UPDATE_NOTE_COMPLETE = "UPDATE_NOTE_COMPLETE";
export const UPDATE_NOTE_ERROR = "UPDATE_NOTE_ERROR";

export const VIEW_NOTE_START = "VIEW_NOTE_START";
export const VIEW_NOTE_COMPLETED = "VIEW_NOTE_COMPLETED";
export const VIEW_NOTE_ERROR = "VIEW_NOTE_ERROR";

export const SET_UPDATE_NOTE = "SET_UPDATE_NOTE";

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    axios
      .get("https://killer-notes.herokuapp.com/note/get/all")
      .then(response => {
        dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: NOTES_FETCH_ERROR });
      });
  };
};

export const addNewNote = notes => {
  return dispatch => {
    dispatch({ type: ADD_NOTE_START });
    axios
      .post("https://killer-notes.herokuapp.com/note/create", notes)
      .then(response => {
        dispatch({ type: ADD_NOTE_COMPLETE, payload: response.data });
      })
      .catch(err => {
        console.log(err);
        dispatch({ type: ADD_NOTE_ERROR });
      });
  };
};

export const getNote = id => {
  return dispatch => {
    dispatch({ type: VIEW_NOTE_START });
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(res => {
        dispatch({ type: VIEW_NOTE_COMPLETED, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: VIEW_NOTE_ERROR, payload: err });
      });
  };
};

export const updateNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTE_START });
  console.log(note);
  axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(response => {
      console.log(response);
      dispatch({ type: UPDATE_NOTE_COMPLETE, payload: response.data });
    })
    .catch(err => {
      console.log(err);
      dispatch({ type: UPDATE_NOTE_ERROR, payload: err });
    });
};

export const setUpdateNote = id => {
  return {
    type: SET_UPDATE_NOTE,
    payload: id
  };
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