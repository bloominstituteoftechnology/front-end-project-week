import axios from 'axios';
import {
  FETCH_NOTES,
  ADD_NOTE,
  FETCH_SINGLE_NOTE,
  FETCHING,
  ERROR,
  UPDATE_NOTE,
  DELETE_NOTE,
  SEARCH
} from './types';

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
          payload: err.message
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
        console.log(res);
        dispatch({
          type: ADD_NOTE,
          payload: res.data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err.message
        });
      });
  };
};

export const fetchNote = ({ id }) => {
  const request = axios.get(
    `https://killer-notes.herokuapp.com/note/get/${id}`
  );

  return dispatch => {
    dispatch({
      type: FETCHING
    });
    request
      .then(res => {
        dispatch({
          type: FETCH_SINGLE_NOTE,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: err.message
        })
      );
  };
};

export const updateNote = (id, note) => {
  const request = axios.put(
    `https://killer-notes.herokuapp.com/note/edit/${id}`,
    note
  );

  return dispatch => {
    dispatch({
      type: FETCHING
    });
    request
      .then(res => {
        console.log(res);
        dispatch({
          type: UPDATE_NOTE,
          payload: res.data
        });
      })
      .catch(err =>
        dispatch({
          type: ERROR,
          payload: err.message
        })
      );
  };
};

export const deleteNote = id => {
  const request = axios.delete(
    `https://killer-notes.herokuapp.com/note/delete/${id}`
  );

  return dispatch => {
    dispatch({
      type: FETCHING
    });
    request
      .then(res => {
        dispatch({
          type: DELETE_NOTE
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err.message
        });
      });
  };
};

export const search = term => {
  if (!term) {
    const request = axios.get(
      'https://killer-notes.herokuapp.com/note/get/all'
    );

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
            payload: err.message
          });
        });
    };
  } else {
    return {
      type: SEARCH,
      payload: term
    };
  }
};
