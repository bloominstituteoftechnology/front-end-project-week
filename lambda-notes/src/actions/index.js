import axios from 'axios';

export const FETCHING_DATA = 'FETCHING_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const DATA_ERROR = 'DATA_ERROR';

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_DATA });
  axios 
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then(response => {
      dispatch({type: DATA_SUCCESS, results: response.data})
    })
    .catch(err => {
      console.log(err)
      dispatch({type: DATA_ERROR, error: err})
    })
} 