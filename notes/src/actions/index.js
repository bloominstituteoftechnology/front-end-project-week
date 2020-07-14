import { URL } from "../constants";

import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const FETCH_NOTES = "FETCH_NOTES";
export const FETCHING_NOTE = "FETCHING_NOTE";
export const FETCH_NOTE = "FETCH_NOTE";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";

export const OPEN_MODAL = "OPEN_MODAL";
export const CLOSE_MODAL = "CLOSE_MODAL";

export const SHOW_EDIT = "SHOW_EDIT";
export const HIDE_EDIT = "HIDE_EDIT";

export const SORT = "SORT";

export const TOGGLE_SORT = "TOGGLE_SORT";

export const SEARCH = "SEARCH";

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES });
  axios
    .get(`${URL}get/all`)
    .then(res => dispatch({ type: FETCH_NOTES, payload: res.data }))
    .catch(err => console.log(err));
};

export const fetchNote = id => dispatch => {
  dispatch({ type: FETCHING_NOTE });
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
      dispatch({ type: EDIT_NOTE, payload: res.data });
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

export const toggleSort = () => ({ type: TOGGLE_SORT });

export const sortList = criteria => ({ type: SORT, payload: criteria });

export const searchList = criteria => ({ type: SEARCH, payload: criteria });
