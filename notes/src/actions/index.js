import { URL } from "../constants";

import axios from "axios";

export const FETCH_NOTES = "FETCH_NOTES";
export const FETCH_NOTE = "FETCH_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const SHOW_EDIT = "SHOW_EDIT";
export const HIDE_EDIT = "HIDE_EDIT";

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
    .then(res => {
      note._id = res.data.success;
      dispatch({ type: ADD_NOTE, payload: note });
    })
    .catch(err => console.log(err));
};

export const editNote = note => dispatch => {
  axios
    .put(`${URL}edit/${note._id}`, note)
    .then(res => {
      note = res.data;
      dispatch({ type: EDIT_NOTE, payload: note });
    })
    .catch(err => console.log(err));
};

export const deleteNote = id => dispatch => {
  axios
    .delete(`${URL}delete/${id}`)
    .then(() => dispatch({ type: DELETE_NOTE, payload: id }))
    .catch(err => console.log(err));
};

export const openModal = () => ({ type: OPEN_MODAL });

export const closeModal = () => ({ type: CLOSE_MODAL });

export const displayEditForm = () => ({ type: SHOW_EDIT });

export const hideEditForm = () => ({ type: HIDE_EDIT });
