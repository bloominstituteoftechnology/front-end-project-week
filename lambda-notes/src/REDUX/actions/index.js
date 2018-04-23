import axios from 'axios';

export const FETCHING_ERROR = "FETCHING_ERROR";
export const FETCH_NOTES = "FETCH_NOTES";

export const getNotes = () => {
  return dispatch => {
    axios.get("http://localhost:3141/notes")
      .then(response => {
        console.log(response);
        dispatch({ type: FETCH_NOTES, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCHING_ERROR })
      })
  }
}