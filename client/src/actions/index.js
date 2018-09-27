import { createActions } from 'redux-actions';
import axios from 'axios';

// const API_URL = 'https://lambda-notes-ash.herokuapp.com/api/notes';
const API_URL = 'http://localhost:4000/api/notes';

export const {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
  addNoteRequest,
  addNoteSuccess,
  addNoteFailure,
  editNoteRequest,
  editNoteSuccess,
  editNoteFailure,
  deleteNoteRequest,
  deleteNoteSuccess,
  deleteNoteFailure,
} = createActions(
  'FETCH_NOTES_REQUEST',
  'FETCH_NOTES_SUCCESS',
  'FETCH_NOTES_FAILURE',
  'FETCH_ONE_REQUEST',
  'FETCH_ONE_SUCCESS',
  'FETCH_ONE_FAILURE',
  'ADD_NOTE_REQUEST',
  'ADD_NOTE_SUCCESS',
  'ADD_NOTE_FAILURE',
  'EDIT_NOTE_REQUEST',
  'EDIT_NOTE_SUCCESS',
  'EDIT_NOTE_FAILURE',
  'DELETE_NOTE_REQUEST',
  'DELETE_NOTE_SUCCESS',
  'DELETE_NOTE_FAILURE',
);

export const {
  updateSearchTerm,
  sortAscending,
  sortDescending,
  moveItem,
} = createActions(
  'UPDATE_SEARCH_TERM',
  'SORT_ASCENDING',
  'SORT_DESCENDING',
  'MOVE_ITEM',
);

export const { authSuccess, authError, authLogout } = createActions(
  'AUTH_SUCCESS',
  'AUTH_ERROR',
  'AUTH_LOGOUT',
);

export const fetchNotes = () => async dispatch => {
  dispatch(fetchNotesRequest());
  try {
    let response = await axios.get(`${API_URL}`);
    dispatch(fetchNotesSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchNotesFailure(err));
  }
};

export const fetchOne = id => async dispatch => {
  dispatch(fetchOneRequest());
  try {
    let response = await axios.get(`${API_URL}/${id}`);
    dispatch(fetchOneSuccess(response.data));
  } catch (err) {
    dispatch(fetchOneFailure(err));
  }
};

export const addNote = data => async dispatch => {
  dispatch(addNoteRequest());
  try {
    let response = await axios.post(`${API_URL}/create`, data);
    dispatch(addNoteSuccess({ _id: response.data.success, ...data }));
  } catch (err) {
    dispatch(addNoteFailure(err));
  }
};

export const editNote = (id, data) => async dispatch => {
  dispatch(editNoteRequest());
  try {
    let response = await axios.put(`${API_URL}/${id}`, data);
    dispatch(editNoteSuccess(response.data));
  } catch (err) {
    dispatch(editNoteFailure(err));
  }
};

export const deleteNote = id => async dispatch => {
  dispatch(deleteNoteRequest());
  try {
    await axios.delete(`${API_URL}/${id}`);
    dispatch(deleteNoteSuccess());
  } catch (err) {
    dispatch(deleteNoteFailure());
  }
};

export const authUser = (credentials, type) => async dispatch => {
  try {
    let response = await axios.post(`${API_URL}/api/${type}`, credentials);
    if (response.data.error) return dispatch(authError(response.data.error));
    localStorage.setItem('token', response.data.token);
    dispatch(authSuccess(response.data.token));
  } catch (err) {
    console.log(err);
    dispatch(authError('Something went wrong!'));
  }
};

export const logout = () => {
  localStorage.removeItem('token');
  return authLogout();
};
