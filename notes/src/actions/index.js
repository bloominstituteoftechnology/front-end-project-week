import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES'; 
export const FETCHED_NOTES = 'FETCHED_NOTES'; 
export const ERROR = 'ERROR'; 
export const ADDING_NOTES = 'ADDING_NOTES'; 
export const ADD_NOTES = 'ADD_NOTES'; 
export const DELETING = 'DELETING'; 
export const DELETED = 'DELETED'; 
export const UPDATING = 'UPDATING'; 
export const UPDATED = 'UPDATED'; 

export const gettingNote = () => {
  const getNotes = axios.get('https://killer-notes.herokuapp.com/note/get/all');
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    getNotes.then(response => {
      console.log('response data: ', response.data)
      dispatch({ type: FETCHED_NOTES, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}