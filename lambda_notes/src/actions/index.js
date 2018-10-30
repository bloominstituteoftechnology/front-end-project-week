import axios from 'axios';

export const ERROR = 'ERROR';

export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';

export const ADD_NOTE = 'ADD_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';

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
