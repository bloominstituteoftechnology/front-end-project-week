import axios from "axios";

export const FETCHING_NOTES_START = "FETCHING_NOTES_START";
export const FETCHING_NOTES_SUCCESS = "FETCHING_NOTES_SUCCESS";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";

export const ADD_NOTE_START = "ADD_NOTE_START";
export const ADD_NOTE_SUCCESS = "ADD_NOTE_SUCCESS";
export const ADD_NOTE_FAILURE = "ADD_NOTE_FAILURE";

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
