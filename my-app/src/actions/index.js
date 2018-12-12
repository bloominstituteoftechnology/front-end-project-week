import axios from "axios";
export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";
export const POST_NOTE = "POST_NOTE";
export const POST_NOTE_SUCCESS = "POST_NOTE_SUCCESS";
export const POST_NOTE_FAILURE = "POST_NOTE_FAILURE";
export const PUT_NOTE = "PUT_NOTE";
export const PUT_NOTE_SUCCESS = "PUT_NOTE_SUCCESS";
export const PUT_NOTE_FAILURE = "PUT_NOTE_FAILURE";
export const DELETE_NOTE = "DELETE_NOTE";
export const DELETE_NOTE_SUCCESS = "DELETE_NOTE_SUCCESS";
export const DELETE_NOTE_FAILURE = "DELETE_NOTE_FAILURE";
export const FETCH_NOTE_ID = "FETCH_NOTE_ID";
export const FETCH_NOTE_ID_SUCCESS = "FETCH_NOTE_ID_SUCCESS";
export const FETCH_NOTE_ID_FAILURE = "FETCH_NOTE_ID_FAILURE";

const url = `http://localhost:9000`;

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
  axios
    .get(`${url}/get/all`)
    .then(response => {
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
    });
};
export const addNote = note => dispatch => {
  console.log("in addNote", note);
  dispatch({ type: POST_NOTE });
  axios
    .post(`${url}/create`, note)
    .then(response => {
      console.log(response);
    })
    .then(response => {
      dispatch({ type: POST_NOTE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: POST_NOTE_FAILURE, payload: error });
    });
};
export const editNote = note => dispatch => {
  dispatch({ type: PUT_NOTE });
  axios
    .put(`${url}/edit/${note.id}`, note)
    .then(response => {
      dispatch({ type: PUT_NOTE_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: PUT_NOTE_FAILURE, payload: error });
    });
};
export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${url}/delete/${id}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE_SUCCESS });
    })
    .catch(error => {
      dispatch({ type: DELETE_NOTE_FAILURE, payload: error });
    });
};
export const fetchNoteById = id => dispatch => {
  console.log("fetching", id);
  dispatch({ type: FETCH_NOTE_ID });
  axios
    .get(`${url}/get/${id}`)
    .then(response => {
      dispatch({ type: FETCH_NOTE_ID_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCH_NOTE_ID_FAILURE, payload: error });
    });
};
