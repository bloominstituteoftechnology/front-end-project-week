import axios from 'axios';

const usersUrl = `http://localhost:8000/api`;
const notesUrl = `http://localhost:8000/api/notes`;

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTES' });
    axios
      .get(notesUrl)
      .then(response => {
        dispatch({ type: 'NOTES_FETCHED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const silentUpdate = () => { //fetch notes without using loading icon
  return dispatch => {
    axios
      .get(notesUrl)
      .then(response => {
        dispatch({ type: 'SILENT_UPDATE', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const updateNoteOrdering = (updatedNoteOrdering) => { // update a user's noteOrdering
  return dispatch => {
    axios
      .put(`${usersUrl}/ordering`, updatedNoteOrdering)
      .then(() => silentUpdate()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const addNote = (newNote) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTES' });
    axios
      .post(notesUrl, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getNote = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTE' });
    axios
      .get(`${notesUrl}/${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_FETCHED', payload: response.data });
      })
      .catch(error => {
        if (error.response.status === 404) {
          dispatch({ type: 'NO_NOTE_FETCHED'});
        } else {
          dispatch({ type: 'ERROR', payload: error });
        }
      });
  }
}

export const editNote = (editedNote) => {
  return dispatch => {
    dispatch({ type: 'EDITING_NOTE' });
    axios
      .put(`${notesUrl}/${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: 'NOTE_EDITED', payload: response.data });
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTES' });
    axios
      .delete(`${notesUrl}/${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
