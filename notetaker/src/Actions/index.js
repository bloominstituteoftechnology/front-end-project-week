import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDED = 'ADDED';
export const DELETED = 'DELETED';
export const UPDATED = 'UPDATED';

export const getNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING})
      axios.get('http://localhost:5000/api/notes')
        .then(response => {
          dispatch({type: FETCHED, notes: response.data})
        })
        .catch(error => {
          dispatch({type: ERROR, error: error})
        })
    }
}

export const addNote = (newNote) => {
  return dispatch => {
    // dispatchEvent({type: ADDED})
      axios.post('http://localhost:5000/api/notes', newNote)
      .then(response => {
        dispatch({type: ADDED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}

export const deletenote = (id) => {
  return dispatch => {
      axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(response => {
        dispatch({type: DELETED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}

export const updateNote = (id, noteInfo) => {
  return dispatch => {
      axios.put(`http://localhost:5000/api/notes/${id}`, noteInfo)
      .then(response => {
        dispatch({type: UPDATED, notes: response.data})
      })
      .catch(error => {
        dispatch({type: ERROR, error: error})
      })
  }
}