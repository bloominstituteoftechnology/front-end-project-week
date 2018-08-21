import { createActions } from 'redux-actions';
import axios from 'axios';

const API_URL = 'https://killer-notes.herokuapp.com/note';

export const {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
  fetchOneRequest,
  fetchOneSuccess,
  fetchOneFailure,
} = createActions(
  'FETCH_NOTES_REQUEST',
  'FETCH_NOTES_SUCCESS',
  'FETCH_NOTES_FAILURE',
  'FETCH_ONE_REQUEST',
  'FETCH_ONE_SUCCESS',
  'FETCH_ONE_FAILURE',
);

export const fetchNotes = () => async dispatch => {
  dispatch(fetchNotesRequest());
  try {
    let response = await axios.get(`${API_URL}/get/all`);
    dispatch(fetchNotesSuccess(response.data));
  } catch (err) {
    console.log(err);
    dispatch(fetchNotesFailure(err));
  }
};

export const fetchOne = id => async dispatch => {
  dispatch(fetchOneRequest());
  try {
    let response = await axios.get(`${API_URL}/get/${id}`);
    dispatch(fetchOneSuccess(response.data));
  } catch (err) {
    dispatch(fetchOneFailure(err));
  }
};
