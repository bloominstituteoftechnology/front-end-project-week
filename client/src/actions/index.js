import { createActions } from 'redux-actions';
import axios from 'axios';

let API_URL = 'https://lambda-notes-ash.herokuapp.com/api/';
if (process.env.NODE_ENV !== 'production')
  API_URL = 'http://localhost:4000/api/';

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
  clearError,
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
  'CLEAR_ERROR',
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

export const {
  authSuccess,
  authError,
  authLogout,
  authRequest,
} = createActions('AUTH_REQUEST', 'AUTH_SUCCESS', 'AUTH_ERROR', 'AUTH_LOGOUT');

export const fetchNotes = () => async (dispatch, getState) => {
  dispatch(fetchNotesRequest());
  try {
    let response = await axios({
      url: `${API_URL}notes`,
      method: 'GET',
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    if (response.data.error) {
      localStorage.removeItem('token');
      dispatch(fetchNotesFailure(response.data.error));
      return dispatch(authLogout());
    }
    dispatch(fetchNotesSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchNotesFailure(err));
  }
};

export const fetchOne = id => async (dispatch, getState) => {
  dispatch(fetchOneRequest());
  try {
    let response = await axios({
      method: 'GET',
      url: `${API_URL}notes/${id}`,
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    if (response.data.error) {
      dispatch(fetchOneFailure(response.data.error));
      localStorage.removeItem('token');
      return dispatch(authLogout());
    }
    dispatch(fetchOneSuccess(response.data));
  } catch (err) {
    dispatch(fetchOneFailure(err));
  }
};

export const addNote = (data, cb) => async (dispatch, getState) => {
  dispatch(addNoteRequest());
  try {
    let response = await axios({
      method: 'POST',
      data,
      url: `${API_URL}notes`,
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    if (response.data.error) {
      localStorage.removeItem('token');
      dispatch(addNoteFailure(response.data.error));
      return dispatch(authLogout());
    }
    dispatch(addNoteSuccess({ id: response.data.success, ...data }));
    cb();
  } catch (err) {
    console.log(err);
    dispatch(addNoteFailure(err));
  }
};

export const editNote = (id, data, cb) => async (dispatch, getState) => {
  dispatch(editNoteRequest());
  try {
    let response = await axios({
      url: `${API_URL}notes/${id}`,
      data,
      method: 'PUT',
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    if (response.data.error) {
      localStorage.removeItem('token');
      dispatch(editNoteFailure(response.data.error));
      return dispatch(authLogout());
    }
    dispatch(editNoteSuccess(response.data));
    cb();
  } catch (err) {
    dispatch(editNoteFailure(err));
  }
};

export const deleteNote = (id, cb) => async (dispatch, getState) => {
  dispatch(deleteNoteRequest());
  try {
    let response = await axios({
      url: `${API_URL}notes/${id}`,
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${getState().token}`,
      },
    });
    if (response.data.error) {
      localStorage.removeItem('token');
      dispatch(deleteNoteFailure(response.data.error));
      return dispatch(authLogout());
    }
    dispatch(deleteNoteSuccess());
    cb();
  } catch (err) {
    dispatch(deleteNoteFailure());
  }
};

export const authUser = (credentials, type) => async (dispatch, getState) => {
  if (getState().authenticating) return Promise.resolve();
  dispatch(authRequest());
  try {
    let response = await axios.post(`${API_URL}${type}`, credentials);
    if (response.data.error) return dispatch(authError(response.data.error));
    localStorage.setItem('token', response.data.token);
    dispatch(authSuccess(response.data.token));
  } catch (err) {
    console.log(err);
    dispatch(authError('Something went wrong!'));
  }
};

export const checkToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return authSuccess(token);
  }
  return authLogout();
};

export const logout = () => {
  localStorage.removeItem('token');
  return authLogout();
};
