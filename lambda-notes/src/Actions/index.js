 import axios from "axios";

export const FETCHING_NOTES_START = "FETCHING_NOTES_START";
export const FETCHING_NOTES_SUCCESS = "FETCHING_NOTES_SUCCESS";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

export const EDIT_NOTE_START = "EDIT_NOTE_START";
export const EDIT_NOTE_SUCCESS = "EDIT_NOTE_SUCCESS";
export const EDIT_NOTE_FAILURE = "EDIT_NOTE_FAILURE";

export const DELETE_NOTE_START = "DELETE_NOTE_START";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";


export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES_START });
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      console.log(response);
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTE_START });
  axios
    .post("https://fe-notes.herokuapp.com/note/create", note)
    .then(response => {
      console.log(response);
      dispatch({
        type: ADD_NOTE_SUCCESS,
        payload: { ...note, _id: response.data.success }
      });
    })
    .catch(error => {
      dispatch({ type: ADD_NOTE_FAILURE, payload: error });
    });
};

export const editNote = (note, id) => dispatch => {
  dispatch({ type: EDIT_NOTE_START });
  axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then(response => {
      dispatch({
        type: EDIT_NOTE_SUCCESS,
        payload: response.data
      });
    })
    .catch(error => {
      dispatch({ type: EDIT_NOTE_FAILURE, payload: error });
    });
};

export const deleteNote = (id) => dispatch => {
  dispatch({ type: DELETE_NOTE_START })
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log(response);
      dispatch({
        type: DELETE_NOTE_SUCCESS,
        payload: id
      })
    })
    .catch(error => {
      dispatch({ type: DELETE_NOTE_FAILURE, payload: error })
    })
}