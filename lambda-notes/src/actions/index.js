import axios from 'axios';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTES' });
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
    dispatch({ type: 'ADDING_NOTE' });
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, newNote)
      .then(response => {
        dispatch({ type: 'NOTE_ADDED' });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const getNote = (id) => {
  return dispatch => {
    dispatch({ type: 'FETCHING_NOTE' });
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
    dispatch({ type: 'EDITING_NOTE' });
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${editedNote.id}`, editedNote)
      .then(response => {
        dispatch({ type: 'NOTE_EDITED', payload: response.data });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    dispatch({ type: 'DELETING_NOTE' });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        dispatch({ type: 'NOTE_DELETED' });
      })
      .catch(error => {
        dispatch({ type: 'ERROR', payload: error });
      });
  }
}
