import axios from 'axios'

// getNotes action creator
export const getNotes = () => {
  return dispatch => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/all`)
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
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// getNote action creator TODO: fill in logic
export const getNote = id => {
  return dispatch => {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// editNote action creator TODO: fill in logic
export const editNote = editedNote => {
  return dispatch => {
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: 'NOTE_EDITED', payload: response.data });
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

// deleteNote action creator TODO: fill in logic
export const deleteNote = id => {}