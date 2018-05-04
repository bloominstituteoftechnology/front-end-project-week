import axios from 'axios';
const ROOT = 'http://localhost:5000';

export const LOAD_NOTES = 'LOAD_NOTES';
export const LOADED_NOTES = 'LOADED_NOTES';

export const loadNotes = () => dispatch => {
  axios
    .get(`${ROOT}/api/notes`)
    .then(({ data }) => {
      dispatch({ type: LOADED_NOTES, notes: data });
    })
    .catch(error => {
      console.log(error);
    });
};

export default loadNotes;
