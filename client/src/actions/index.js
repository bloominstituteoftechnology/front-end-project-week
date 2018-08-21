import { createActions } from 'redux-actions';
import axios from 'axios';

const API_URL = 'https://killer-notes.herokuapp.com/note';

export const {
  fetchNotesRequest,
  fetchNotesSuccess,
  fetchNotesFailure,
} = createActions(
  'FETCH_NOTES_REQUEST',
  'FETCH_NOTES_SUCCESS',
  'FETCH_NOTES_FAILURE',
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
