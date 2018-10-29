import axios from 'axios';


export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';



export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });
    
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });  
  }
  