import axios from 'axios'

// some variables
const url = 'http://localhost:5500/notes/';
const userUrl = null;

// getNotes action creator
export const getNotes = () => {
  return dispatch => {
    axios
      .get(url)
      .then(response => {
        dispatch({ type: 'NOTES_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// addNotes action creator
export const addNote = newNote => {
  return dispatch => {
    axios
      .post(url, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// getNote action creator
export const getNote = id => {
  return dispatch => {
    axios
      .get(`${url}${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// editNote action creator
export const editNote = editedNote => {
  return dispatch => {
    axios
      .put(`${url}${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: 'NOTE_EDITED', payload: response.data });
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// deleteNote action creator
export const deleteNote = id => {
  return dispatch => {
    axios
      .delete(`${url}${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}