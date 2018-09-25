import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_RECIEVED = 'NOTES_RECIEVED';
export const ERROR = 'ERROR';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';
export const SORT_NOTE = 'SORT_NOTE';

export const getNotes = () =>  {
  return function(dispatch){
    dispatch({type: FETCHING_NOTES});
    axios.get('http://localhost:3300/api/notes/')
      .then(res => {
        //convert tags from strings to array here and pass it back 
      dispatch({type: NOTES_RECIEVED, payload: res.data})
    })
      .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const addNote = (newNote) =>  {
  console.log('addnote', newNote)
  return function(dispatch){
    dispatch({type: ADDING_NOTE});
    axios.post('http://localhost:3300/api/notes/', {
    // axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/notes', {
        "tags": newNote.tags,
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

export const deleteNote = (id) =>  {

  return function(dispatch){
    dispatch({type: DELETING_NOTE});
    axios.delete(`http://localhost:3300/api/notes/${id}`).then(res => {
    // axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com//api/notes/${id}`).then(res => {
      dispatch({type: NOTE_DELETED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const editNote = (editedNote) =>  {
  console.log(editedNote, 'editedNote')
  return function(dispatch){
    dispatch({type: EDITING_NOTE});
    axios.put(`http://localhost:3300/api/notes/${editedNote.id}`,
    // axios.put(`https://lambda-notes-backend-mjk.herokuapp.com//api/notes/${editedNote.id}`,
      { "tags": editedNote.tags,
        "title": editedNote.title,
        "textBody": editedNote.textBody}
    ).then(res => {
      dispatch({type: NOTE_EDITED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const sortNote = (newlySortedArray) => {
  return function(dispatch){
    dispatch({type: SORT_NOTE, payload: newlySortedArray});
  }
}
