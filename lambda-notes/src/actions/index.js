import axios from 'axios';

export const START_FETCH = 'START_FETCH';
export const RECEIVE_NOTES = 'RECEIVE_NOTES';
export const RECEIVE_NOTE = 'RECEIVE_NOTE';

const url = 'https://killer-notes.herokuapp.com/note';


export const fetchNotes = () => dispatch => {
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

  export const fetchNoteById = target => dispatch => {
  return axios
    .get(`${url}/get/${target}`)
    .then(res => {
      const { data } = res;
      dispatch({ type: RECEIVE_NOTE, payload: data });
    })
    .catch(err => {
      console.log(err);
    });
  };