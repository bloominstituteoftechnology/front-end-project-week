import axios from 'axios';

export const FETCHING_ERROR = "FETCHING_ERROR";
export const FETCH_NOTES = "FETCH_NOTES";
export const DELETED_NOTE = "DELETED_NOTE";
export const TOGGLE_NIGHT = "TOGGLE_NIGHT";
export const REORDER = "REORDER";
export const OLDEST_NEWEST = "REVERSE";
export const NEWEST_OLDEST = "ORDER";
export const LIST = "LIST";
export const SORT_TITLE = "SORT_TITLE";
export const NEW_USER = "NEW_USER";
export const SET_HOME = "SET_HOME";
export const HANDLE_TAGS = "HANDLE_TAGS";

export const getNotes = () => {
  return dispatch => {
    axios.get("http://localhost:3141/notes")
      .then(response => {
        dispatch({ type: FETCH_NOTES, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: FETCHING_ERROR })
      })
  }
}

export const saveNote = note => {
  return dispatch => {
    axios.post("http://localhost:3141/notes", note)
      .then(response => {
        dispatch({ type: FETCH_NOTES, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const deleteNote = id => {
  return dispatch => {
    axios.delete(`http://localhost:3141/notes/${id}`)
      .then(response => {
        dispatch({ type: FETCH_NOTES, payload: response.data })
      })
      .catch(error => {
        console.log(error)
      })
  }
}

export const updateNote = note => {
  return dispatch => {
    axios.put(`http://localhost:3141/notes/${note.id}`, note)
      .then(response => {
        console.log(response)
        dispatch({ type: FETCH_NOTES, payload: response.data })
      })
      .catch(error => {
        console.log(error);
      })
  }
}

export const handleReverse = () => {
  return dispatch => {
    dispatch({ type: OLDEST_NEWEST })
  }
}

export const handleOrder = () => {
  debugger
  return dispatch => { dispatch({ type: NEWEST_OLDEST }) }
}

export const listViews = () => {
  return dispatch => { dispatch({ type: LIST }) }
}

export const sortTitle = () => {
  return dispatch => { dispatch({ type: SORT_TITLE }) }
}

export const newUser = name => {
  return dispatch => { dispatch({ type: NEW_USER, payload: name }) }
}

export const setHome = bool => {
  return dispatch => { dispatch({ type: SET_HOME, payload: bool }) }
}

export const handleTags = note => {
  return dispatch => { dispatch({ type: HANDLE_TAGS, payload: note }) }
}

export const toggleNight = () => { return dispatch => dispatch({ type: TOGGLE_NIGHT }) }