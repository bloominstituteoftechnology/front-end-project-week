import axios from 'axios';
import { FETCH_NOTES, ADD_NOTE, FETCHING, ERROR } from './types';

export const fetchNotes = () => {
  const request = axios.get('https://killer-notes.herokuapp.com/note/get/all');

  return dispatch => {
    dispatch({
      type: FETCHING
    });
    request
      .then(res => {
        dispatch({
          type: FETCH_NOTES,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

export const addNote = note => {
  const request = axios.post(
    'https://killer-notes.herokuapp.com/note/create',
    note
  );

  return dispatch => {
    dispatch({
      type: FETCHING
    });
    request
      .then(res => {
        dispatch({
          type: ADD_NOTE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};
