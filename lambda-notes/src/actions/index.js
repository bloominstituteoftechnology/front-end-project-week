import axios from 'axios';

const url = `https://killer-notes.herokuapp.com/note`;

export const getNotes = () => {
  return dispatch => {
    axios
      .get(`${url}/get/all`)
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
      .post(`${url}/create`, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getNote = (id) => {
  return dispatch => {
    axios
      .get(`${url}/get/${id}`)
      .then(response => {
        if (!response.data.name && !response.data.errorMessage) {
          dispatch({ type: 'NOTE_FETCHED', payload: response.data });
        } else {
          dispatch({ type: 'NOTE_FETCHED', payload: "no such note" });
        }
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const editNote = (editedNote) => {
  return dispatch => {
    axios
      .put(`${url}/edit/${editedNote.id}`, editedNote)
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
    axios
      .delete(`${url}/delete/${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
