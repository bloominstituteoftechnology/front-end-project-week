import axios from 'axios';

const url = `http://localhost:8000/api/notes`;

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTES' });
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

export const addNote = (newNote) => {
  return dispatch => {
    axios
      .post(url, newNote)
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
      .get(`${url}/${id}`)
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
      .put(`${url}/${editedNote.id}`, editedNote)
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
      .delete(`${url}/${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_DELETED' })
      })
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
