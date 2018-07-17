import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES'; 
export const FETCHED_NOTES = 'FETCHED_NOTES'; 
export const FETCH_ONE_NOTE = 'FETCH_ONE_NOTE'; 
export const ERROR = 'ERROR'; 
// export const ADDING_NOTES = 'ADDING_NOTES'; 
export const ADD_NOTES = 'ADD_NOTES'; 
// export const DELETING = 'DELETING'; 
export const DELETED = 'DELETED'; 
// export const UPDATING = 'UPDATING'; 
export const UPDATED = 'UPDATED'; 

export const gettingNote = () => {
  const getNotes = axios.get('https://killer-notes.herokuapp.com/note/get/all');
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    getNotes.then(response => {
      console.log('response data: ', response.data)
      dispatch({ type: FETCHED_NOTES, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}

export const addingNote = (newNote) => {
  const promise = axios.post('https://killer-notes.herokuapp.com/note/create', newNote);
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    promise.then(response => {
      console.log('response data in adding: ', response.data)
      dispatch({ type: ADD_NOTES, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}
export const displayingNote = (_id) => {
  const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${_id}`);
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    promise.then(response => {
      console.log('response data in displaying a single note: ', response.data)
      dispatch({ type: FETCH_ONE_NOTE, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}

export const deletingNote = (_id) => {
  const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`);
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    promise.then(response => {
      console.log('response data in deleting note: ', response.data)
      dispatch({ type: DELETED, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: err })
    })
  }
}