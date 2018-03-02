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
        console.log(
          'In actions: There was an error getting the notes: ',
          error
        );
      });
  };
};

export const addNote = newNote => {
  const notes = axios.post(`${APIroot}${APIkey}`, newNote);
  return dispatch => {
    notes
      .then(newNote => {
        dispatch({
          type: ADD_NOTE,
          payload: newNote.data,
        });
      })
      .catch(error => {
        console.log('In actions: There was an error adding the note: ', error);
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
        console.log(
          'In actions: There was an error deleting the note: ',
          error
        );
      });
  };
};

export const editNote = editedNote => {
  const notes = axios.delete(`${APIroot}${editedNote.id}${APIkey}`);
  return dispatch => {
    notes
    .then(() => {
      return axios.post(`${APIroot}${APIkey}`, editedNote);
    })
    .then(payload => {
      console.log('in editNote action', payload);
        dispatch({ type: EDIT_NOTE, payload: payload.data });
      })
      .catch(error => {
        console.log('In actions: There was an error editing the note: ', error);
      });
  };
};
