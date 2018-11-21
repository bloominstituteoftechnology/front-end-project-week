import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        console.log(response)
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch( err => {
        dispatch({ type: ERROR, error: "Failed to get notes..."})
      })
  }
}

export const postNote = (newNote) => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.post('https://fe-notes.herokuapp.com/note/create', newNote)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Failed to post new note...'})
      })
  }
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Failed to delete note...'})
      })
  }
};

export const updateNote = updatedNote => {
  return dispatch => {
    dispatch({ type: LOADING })
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote._id}`, updatedNote)
      .then(response => {
        dispatch({ type: SUCCESS, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'Failed to edit note...'})
      })
  }
};