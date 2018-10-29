import axios from 'axios';

export const ERROR = 'ERROR';

export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';

const URL = 'https://fe-notes.herokuapp.com/note';

export const getNotes = () => {
  const notes = axios.get(`${URL}/get/all`);

  return (
    dispatch => {
      dispatch({ type: GETTING_NOTES });

      notes
        .then(response => {
          dispatch({ type: GET_NOTES, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
};
