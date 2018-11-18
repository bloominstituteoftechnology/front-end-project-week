import axios from "axios";
export const LOADING = "LOADING";
export const ERROR = "ERROR";
export const GET_NOTES = "GET_NOTES";
export const DELETE_NOTE = "DELETE_NOTE";

const URL = "https://fe-notes.herokuapp.com/note";


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
      .post(`${URL}/note/create`, newNote)
      .then(res => {
        console.log(res.data)
    //   dispatch({ type: DELETE_NOTE, payload: res.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: "Can not create note" });
    });
};

export const deleteNote = id => dispatch => {
  dispatch({ type: LOADING });
  axios
      .delete(`${URL}/note/delete/${id}`)
      .then(res => {
        console.log(res.data)
    //   dispatch({ type: GET_NOTES, payload: res.data });
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        errorMessage: "Error, can not delete this note"
      });
    });
};
