import axios from "axios";

export const FETCH_NOTES_REQUEST = "FETCH_NOTES_REQUEST";
export const FETCH_NOTES_SUCCESS = "FETCH_NOTES_SUCCESS";
export const FETCH_NOTES_FAILURE = "FETCH_NOTES_FAILURE";

export const ADD_NOTES_REQUEST = "ADD_NOTES_REQUEST";
export const ADD_NOTES_SUCCESS = "ADD_NOTES_SUCCESS";
export const ADD_NOTES_FAILURE = "ADD_NOTES_FAILURE";

export const DELETE_NOTES_REQUEST = "DELETE_NOTES_REQUEST";
export const DELETE_NOTES_SUCCESS = "DELETE_NOTES_SUCCESS";
export const DELETE_NOTES_FAILURE = "DELETE_NOTES_FAILURE";

export const UPDATE_NOTES_REQUEST = "UPDATE_NOTES_REQUEST";
export const UPDATE_FORM = "UPDATE_FORM";
export const UPDATE_FORM_DONE = "UPDATE_FORM_DONE";

export const getNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES_REQUEST });
  axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      console.log("fetch finished");
      console.log(response.data);
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: FETCH_NOTES_FAILURE, payload: err }));
};

export const addNote = note => dispatch => {
  dispatch({ type: ADD_NOTES_REQUEST });
  axios
    .post("https://fe-notes.herokuapp.com/note/create", note)

    .then(response => {
      console.log("add finished");

      dispatch({ type: ADD_NOTES_SUCCESS, payload: response.data });
    })

    .catch(err => dispatch({ type: ADD_NOTES_FAILURE, payload: err }));
};

export const deleteNote = id => dispatch => {
  dispatch({ type: FETCH_NOTES_REQUEST });

  return axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response => {
      console.log("delete finished");
      dispatch({ type: DELETE_NOTES_SUCCESS, payload: response.data });
      return true;
    })
    .catch(err => {
      dispatch({ type: DELETE_NOTES_FAILURE, payload: err });
      return false;
    });
};

export const updateNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTES_REQUEST });
  console.log(note._id);
  axios

    .put(`https://fe-notes.herokuapp.com/note/edit/${note._id}`, note)
    //LOL THIS WORKS CUZ YOU HAVE THE WHOLE OBJECT! YOU ARE UNSTOPABLE!
    .then(response => {
      console.log("update finished");
      dispatch({ type: ADD_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => dispatch({ type: ADD_NOTES_FAILURE, payload: err }));
};

export const updateForm = currentNote => {
  return { type: UPDATE_FORM, payload: currentNote };
};
export const updateFormDone = () => {
  return { type: UPDATE_FORM_DONE };
};
