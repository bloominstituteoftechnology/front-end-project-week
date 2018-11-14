import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDITING_NOTE = 'EDITING_NOTE';

const URL = 'https://fe-notes.herokuapp.com/note';

export const getNotes = () => {
  return (
    dispatch => {
      dispatch({ type: GETTING_NOTES });

      axios.get(`${URL}/get/all`)
        .then(response => {
          console.log('response', response);
          dispatch({ type: GET_NOTES, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
};

export const addNote = note => {
  return (
    dispatch => {
      dispatch({ type: ADDING_NOTE });

      axios.post(`${URL}/create`, note)
        .then(response => {
          dispatch({ type: ADD_NOTE, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const deleteNote = id => {
  return (
    dispatch => {
      dispatch({ type: DELETING_NOTE });

      axios.delete(`${URL}/delete/${id}`)
        .then(response => {
          dispatch({ type: DELETE_NOTE, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const editNote = (id, note) => {
  return (
    dispatch => {
      dispatch({ type: EDITING_NOTE });

      axios.put(`${URL}/edit/${id}`, note)
        .then(response => {
          dispatch({ type: EDIT_NOTE, payload: { id, ...response.data } });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}