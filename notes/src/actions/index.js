import { URL } from "../constants";

import axios from "axios";

export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTE = "FETCH_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const fetchNotes = () => dispatch => {
  axios
    .get(`${URL}get/all`)
    .then(res => dispatch({ type: FETCH_NOTES, payload: res.data }))
    .catch(err => console.log(err));
};

export const fetchNote = id => dispatch => {
  axios
    .get(`${URL}get/${id}`)
    .then(res => dispatch({ type: FETCH_NOTE, payload: res.data }))
    .catch(err => console.log(err));
};

export const addNote = note => dispatch => {
  axios
    .post(`${URL}create`, note)
    .then(dispatch(fetchNotes()))
    .catch(err => console.log(err));
};

export const editNote = note => dispatch => {
  axios
    .put(`${URL}edit/${note._id}`, note)
    .then(dispatch(fetchNotes()))
    .catch(err => console.log(err));
};

export const deleteNote = id => dispatch => {
  axios
    .delete(`${URL}delete/${id}`)
    .then(dispatch(fetchNotes()))
    .catch(err => console.log(err));
};
