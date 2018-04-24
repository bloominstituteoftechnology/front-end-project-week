/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
import axios from 'axios';

export const LOADING = 'LOADING'
export const ERROR = 'ERROR'
export const LOADED = 'LOADED'
export const CREATE = 'CREATE'
export const EDIT = 'EDIT'
export const DELETE = 'DELETE'

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
        dispatch(createNotes());
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