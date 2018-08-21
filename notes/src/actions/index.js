//actions
import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_RECIEVED = 'NOTES_RECIEVED';
export const ERROR = 'ERROR';

export const getNotes = () =>  {
  return function(dispatch){
    dispatch({type: FETCHING_NOTES});
    axios.get('https://killer-notes.herokuapp.com/note/get/all').then(res => {
      dispatch({type: NOTES_RECIEVED, payload: res.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';

export const addNote = (newNote) =>  {
  console.log('addnote')
  return function(dispatch){
    dispatch({type: ADDING_NOTE});
    axios.post('https://killer-notes.herokuapp.com/note/create', {
        "tags": ["tag", "otherTag"],
        "title": newNote.title,
        "textBody": newNote.textBody
    }).then(res => {
      dispatch({type: NOTE_ADDED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
