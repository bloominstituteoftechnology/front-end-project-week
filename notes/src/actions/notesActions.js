import axios from 'axios'
export const GET_NOTES = "GET_NOTES"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

// GET
export const getNotes = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/notes')
      .then( response => {
        dispatch({type: GET_NOTES, notes: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble getting notes.  Take another shot."})
      })
  }
}

// POST
export const createNotes = (newNote) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.post('http://localhost:5000/notes', newNote)
      .then( response => {
        dispatch({type: GET_NOTES, notes: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Can't create new note"})
      })
  }
}

// DELETE

export const deleteNote = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then( response => {
        dispatch({ type: GET_NOTES, notes: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Can't delete note, hit it again."})
      })
  }
}

// PUT
export const updateNote = (updatedNote) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/notes/${updatedNote.id}`, updatedNote)
      .then( response => {
        dispatch({ type: GET_NOTES, notes: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Can't update note, hit it again."})
      })
  }
}
