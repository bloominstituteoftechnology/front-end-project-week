import axios from 'axios';

export const FETCHING = "FETCHING";
export const FETCHED  = "FETCHED";
export const SAVING   = "SAVING";
export const SAVED    = "SAVED";
export const UPDATING = "UPDATING";
export const UPDATED  = "UPDATED";
export const DELETING = "DELETING";
export const DELETED  = "DELETED";
export const ERROR    = "ERROR";

export const fetchData = id => {
  const request = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
  return (dispatch) => {
    dispatch({type: FETCHING});
    request.then(response => {
      dispatch({type: FETCHED, payload: response.data});
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const saveData = () => {
  const request = axios.get('https://killer-notes.herokuapp.com/note/get/all');
  return (dispatch) => {
    dispatch({type: FETCHING});
    request.then(response => {
      dispatch({type: FETCHED, payload: response.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const createNote = newNote => {
  const request = axios.post('https://killer-notes.herokuapp.com/note/create', newNote);
  return (dispatch) => {
    dispatch({type: SAVING});
    request.then(response => {
      dispatch({type: SAVED, payload: response.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const updateNote = (id, noteUpdates) => {
  const request = axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, noteUpdates);
  return (dispatch) => {
    dispatch({type: UPDATING});
    request.then(response => {
      dispatch({type: UPDATED, payload: response.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const deleteNote = (id) => {
  const request = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
  return (dispatch) => {
    dispatch({type: DELETING});
    request.then(response => {
      dispatch({type: DELETED, payload: response.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
