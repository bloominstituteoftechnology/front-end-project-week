import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';

const url = 'https://killer-notes.herokuapp.com/note';


export const fetchNotes = () => dispatch => {
  dispatch({ type: START_FETCH, payload: 'all' });
  return axios
    .get(`${url}/get/all`)
    .then(res => {
      const { data } = res;
      dispatch({ type: RECEIVE_NOTES, payload: data });
    })
    .catch(err => {
      console.log(err);
    });
  };