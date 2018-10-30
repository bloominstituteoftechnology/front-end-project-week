import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';



export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES  });
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then(response => {
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data 
      });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};


export const addNote = note => dispatch => {
  console.log('this is the note in the actions', note)
  dispatch({ type: ADDING_NOTE });
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response =>{
      console.log('this is the response', response)
      dispatch({ type: ADD_NOTE_SUCCESS, payload: response.data })      
    })
    .catch(error => {
      dispatch({ type: ADD_NOTE_FAILURE, payload: error });
    });
}

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETING_NOTE });
  axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then(response =>{
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: response.data })      
    })
    .catch(error => {
      dispatch({ type: DELETE_NOTE_FAILURE, payload: error });
    });
}