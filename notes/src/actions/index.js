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
export const UPLOAD_SUCCESS = 'UPLOAD_SUCCESS'
export const UPLOAD_FAIL = 'UPLOAD_FAIL'
export const UPLOADING_FILE = 'UPLOADING_FILE'


const URL = 'http://localhost:8000/'

export const uploadRequest = ({ file, name }) => {
  console.log('UPLOAD REQUEST RUNNING');
  let data = new FormData();
  data.append('file', document);
  data.append('name', name);

  return (dispatch) => {
    dispatch({type: UPLOADING_FILE})
    axios
    .post(URL + 'files', data)
      .then(response => {
        dispatch({type: UPLOAD_SUCCESS, payload: response.data})
      })
      .catch(error => {
        dispatch({type: UPLOAD_FAIL, payload: error.data});
      })
  };
}


export const fetchNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING_NOTES})
    axios
      .get(URL + 'notes')
      .then(response => {
        console.log(response);
        dispatch({type: NOTES_FETCHED, payload: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({type: SAVING_NOTES});
    axios
      .post(URL+'notes', note) //response from the server will be the ID of the new note
      .then(response => { dispatch({type: NOTES_SAVED, payload:response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    dispatch({type: DELETING_NOTE})
    axios
    .delete(URL + 'notes', { data: { id: id }})
    .then(response =>{ dispatch({type: NOTE_DELETED, payload: response.data })
    })
    .catch(error => {
      dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
    })
    console.log('axios done');
  }
}
export const updateNote = (note) => {
  return dispatch => {
    dispatch({type: UPDATING_NOTE});
    console.log('Actions');
    console.log(note);
    console.log(note.id);
    axios
      .put(URL+`notes/${note.id}`, note) //response from the server will be the ID of the new note
      .then(response => { dispatch({type: NOTE_UPDATED, payload:response.data}) })
      .catch(error => {
        dispatch({type: ERROR, payload: 'Houston, we have a problem', error})
      })
  }
}
