import axios from 'axios'

// getNotes action creator TODO: fill in logic
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

// addNotes action creator TODO: fill in logic
export const addNote = () => {}

// getNote action creator TODO: fill in logic
export const getNote = () => {}

// editNote action creator TODO: fill in logic
export const editNote = editedNote => {}

// deleteNote action creator TODO: fill in logic
export const deleteNote = id => {}