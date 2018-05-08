import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHNOTE = 'FETCHNOTE';
export const NOTEFETCHED = 'NOTEFETCHED';
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

export const getNote = (id) => {
  console.log('GETTING NOTE!!!');
  return dispatch => {
    dispatch({type: FETCHNOTE})
      axios.get(`http://localhost:5000/api/notes/${id}`)
        .then(response => {
          dispatch({type: NOTEFETCHED, note: response.data})
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

export const deleteNote = (id) => {
  console.log('DELETE NOTE', id);
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

export const editNote = (id, noteInfo) => {
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