import axios from 'axios';

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

export const addNote = (newNote) => {
  return dispatch => {
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getNote = (id) => {
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

export const editNote = (editedNote) => {
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

export const deleteNote = (id) => {
  return dispatch => {
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(() => getNotes()(dispatch))
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
