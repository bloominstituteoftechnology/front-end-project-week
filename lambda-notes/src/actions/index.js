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

export const updateNoteOrdering = (updatedNoteOrdering) => {
  console.log("redux: ", updatedNoteOrdering);
  return dispatch => {
    axios
      .put(`${usersUrl}/ordering`, updatedNoteOrdering)
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const addNote = (newNote) => {
  return dispatch => {
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
    dispatch({ type: 'DELETING_NOTE' });
    axios
      .delete(`${notesUrl}/${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_DELETED' })
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
