import axios from 'axios';

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
export const CREATE = 'CREATE'
export const EDIT = 'EDIT'
export const DELETE = 'DELETE'
export const SINGLE_NOTE = 'SINGLE_NOTE'

export const loadNotes = () => {
  const promise = axios.get('http://localhost:7777/notes');

  return dispatch => {
    dispatch({ type: LOADING });

    promise
      .then(response => {
        dispatch({ type: LOADED, payload: response.data });
      })

      .catch(err => {
        dispatch({ type: ERROR, payload: 'Error occured while loading note' });
      });
  };
};

export const createNotes = note => {
  const promise = axios.post('http://localhost:7777/notes', note);
  return dispatch => {
    dispatch ({ type: CREATE });
    promise
      .then(response => {
        dispatch(loadNotes());
      })

      .catch(err => {
        dispatch({ type: ERROR, payload: 'Unable to create note' });
      });
  };
};

export const editNote = (note, data) => {
  const promise = axios.put(`http://localhost:7777/notes/${note}`, data);
  return dispatch => {
    dispatch({ type: EDIT });
    promise
      .then(reponse => {
        dispatch(createNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = note => {
  const promise = axios.delete(`http://localhost:7777/notes/${note}`);
  return dispatch => {
    dispatch({ type: DELETE });
    promise
      .then(reponse => {
        dispatch(createNotes());
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const singleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};