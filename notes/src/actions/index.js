import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';
export const CREATING_NOTE = 'CREATING_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';

const URL = 'https://fe-notes.herokuapp.com/note/get/all';

export const getNotes = () => {
  const noteGet = axios.get(`${URL}`);
  return dispatch => {
    dispatch({ type: GETTING_NOTES });
    noteGet
      .then(res => {
        dispatch({ type: GET_NOTES, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err});
      });
  };
};

export const createNote = note => {
  const notePost = axios.post(`${URL}`, note);
  return dispatch => {
    dispatch({ type: CREATING_NOTE });
    notePost
      .then(({ data }) => {
        dispatch({ type: CREATE_NOTE, payload: data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = id => {
  const deletedNote = axios.delete(`${URL}`, {
    data: { id }
  });
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    deletedNote
      .then(({ data }) => {
        dispatch({ type: DELETE_NOTE, payload: data });
        dispatch({ type: SINGLE_NOTE, payload: {} });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const toggleShowUpdate = () => {
  return {
    type: TOGGLE_UPDATE_NOTE
  };
};

export const updateSingleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};