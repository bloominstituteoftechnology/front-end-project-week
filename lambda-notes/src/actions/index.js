import axios from 'axios'


export const GETTING_NOTES = 'GETTING_NOTES'
export const NOTES_GOT = 'NOTES_GOT'
export const FAILURE = 'FAILURE'

const URL = 'https://fe-notes.herokuapp.com/note'


export const fetchNotes = () => dispatch => {
  dispatch({ type: GETTING_NOTES });
  axios
    .get(`${URL}/get/all`)
    .then(({ data }) => dispatch({ type: NOTES_GOT, payload: data }))
    .catch(err => {
      dispatch({ type: FAILURE, payload: err });
    });
};