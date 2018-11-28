import axios from 'axios';

export const REQUEST_ALL_NOTES = 'REQUEST_ALL_NOTES';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const ERROR = 'ERROR';

export const requestAllNotes = () => {
  return {
    type: REQUEST_ALL_NOTES,
  };
}

export const receiveAllNotes = res => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes: res.data
  }
}

export const getAllNotes = () => {
  return dispatch => {
    dispatch(requestAllNotes());
    return axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => dispatch(receiveAllNotes(res)))
      .catch(err => {
        console.log(err);
      });
  }
}
