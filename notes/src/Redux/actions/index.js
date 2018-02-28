import axios from 'axios';
export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

const APIroot = 'http://reduxblog.herokuapp.com/api/posts/';
const APIkey = '?key=teleson/';

export const getNotes = () => {
  const notes = axios.get(`${APIroot}${APIkey}`);
  return dispatch => {
    notes
      .then(payload => {
        dispatch({ type: GET_NOTES, payload: payload.data });
      })
      .catch(error => {
        console.log('In actions: There was an error getting notes: ', error);
      });
  };
};

export const addNote = (newNote, cb) => {
  const notes = axios.post(`${APIroot}${APIkey}`, newNote);
  return dispatch => {
    notes
      .then(newNote => {
        dispatch({
          type: ADD_NOTE,
          payload: newNote.data,
        });
      })
      .then(cb())
      .catch(error => {
        console.log('In actions: There was an error adding note: ', error);
      });
  };
};

export const deleteNote = oldNote => {
  const notes = axios.delete(`${APIroot}${oldNote.id}${APIkey}`);
  return dispatch => {
    notes
      .then(payload => {
        dispatch({ type: DELETE_NOTE, payload: payload.data });
      })
      .catch(error => {
        console.log('In actions: There was an error deleting note: ', error);
      });
  };
};

export const editNote = (editedNote, id) => {
  return {
    type: EDIT_NOTE,
    payload: editedNote,
    id: id,
  };
};
