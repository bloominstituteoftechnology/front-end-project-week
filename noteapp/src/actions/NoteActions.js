import axios from 'axios';

export const ADD_NOTES = 'ADD_NOTES';
export const ADDED_NOTES = 'ADED_NOTES';

const ROOT = 'http://localhost:3000';

const addNotes = () => dispatch => {
  dispatch({ ADD_NOTES });
  axios
    .post(`${ROOT}/api/newnote`)
    .then(({ data }) => {
      dispatch({ type: ADDED_NOTES, notes: data });
    })
    .catch(err => {
      dispatch({ error: 'Error adding note' });
    });
};

export default addNotes;
