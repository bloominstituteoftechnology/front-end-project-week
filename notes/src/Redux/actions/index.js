import axios from 'axios';
export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

const API = 'http://reduxblog.herokuapp.com/api/posts?key=teleson';

export const getNotes = () => {
  const notes = axios.get(API);
  return dispatch => {
    notes
      .then(payload => {
        dispatch({ type: GET_NOTES, payload: payload.data });
      })
      .catch(error => {
        console.log('In actions: There was an error adding note: ', error);
      });
  };
};

export const addNote = newNote => {
  const notes = axios.post(API, newNote);
  return dispatch => {
    notes
      .then(newNote => {
        dispatch({
          type: ADD_NOTE,
          payload: newNote.data,
        });
      })
      .catch(error => {
        console.log('In actions: There was an error adding note: ', error);
      });
  };
};

export const deleteNote = oldNote => {
  return {
    type: DELETE_NOTE,
    payload: oldNote.id,
  };
};

export const editNote = (editedNote, id) => {
  return {
    type: EDIT_NOTE,
    payload: editedNote,
    id: id,
  };
};
