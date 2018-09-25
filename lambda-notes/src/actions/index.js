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
export const getNote = () => {}

// editNote action creator TODO: fill in logic
export const editNote = editedNote => {}

// deleteNote action creator TODO: fill in logic
export const deleteNote = id => {}