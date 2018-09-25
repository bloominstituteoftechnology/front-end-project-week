import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const NOTES_FETCHED = 'NOTES_FETCHED'
export const NOTES_SAVED = 'NOTES_SAVED'
export const SAVING_NOTES = 'SAVING_NOTES'
export const UPDATING_NOTE = 'UPDATING_NOTE'
export const NOTE_UPDATED = 'NOTE_UPDATED'
export const DELETING_NOTE = 'DELETING_NOTE'
export const NOTE_DELETED = 'NOTE_DELETED'
export const NOTES = 'NOTES'
export const ERROR = 'ERROR'

const URL = 'https://killer-notes.herokuapp.com/note/'

export const fetchNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING_NOTES})
    axios
      .get(URL+'get/all')
      .then(response => { console.log(response), dispatch({type: NOTES_FETCHED, payload: response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({type: SAVING_NOTES});
    axios
      .post(URL+'create', note) //response from the server will be the ID of the new note
      .then(response => { console.log('creating'), dispatch({type: NOTES_SAVED, payload:response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const deleteNote = (noteId) => {
  console.log('step 2');
  console.log(URL+`delete/${noteId}`);
  return dispatch => {
    // dispatch({type: DELETING_NOTE})
    console.log('first dispatch fired');
    axios
    .delete(URL+`delete/${noteId}`)
    .then(response =>{ console.log('axios delete fired');
      // dispatch({type: NOTE_DELETED, payload: response.data})
    })
    .catch(error => {
      console.error('Wops! Mistake!', error)
    })
    console.log('axios done');
  }
}
