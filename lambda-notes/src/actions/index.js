import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHING_NOTE = "FETCHING";
export const GET_NOTES = "GET_NOTES";
export const GET_NOTE = "GET_NOTE";
export const ADDING = "ADDING";
export const ADDED = "ADDED";
export const ERROR = "ERROR";

//Fetching notes
export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING});
  axios 
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
      dispatch({
        type: GET_NOTES,
        payload: response.data,
      })
    })
    .catch(err => {
      dispatch({
        type: ERROR,
        payload: err,
      })  
  })
}

//Adding a new note
// new note is added to the api but doesnt update live, I have to refresh page to see new note ---- fixed

export const addNote = note => dispatch => {
  dispatch({type: ADDING})
    axios 
      .post("https://fe-notes.herokuapp.com/note/create", note)
      .then(() => fetchNotes()(dispatch))
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err,   
    })
  })
}

// Getting an especific note

export const getNote = id => dispatch => {
  dispatch({type: FETCHING_NOTE});
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response => {
      dispatch({type: GET_NOTE, payload: response.data})
    })
    .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
}