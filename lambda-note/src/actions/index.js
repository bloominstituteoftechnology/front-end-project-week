import axios from 'axios';

// Fetch note
export const FETCHING_NOTE = "FETCHING_NOTE";
export const fetchNote = () => {
  const request = axios.get('https://killer-notes.herokuapp.com/note/get/all');

  return (dispatch) => {
    request.then(data => data.data)
           .then(data => dispatch({ type: FETCHING_NOTE, payload: data }))
           .catch(error => console.error(error))
  }
}

// View note
export const VIEW_NOTE = "VIEW_NOTE";
export const viewNote = (id) => {
  const request = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);

  return (dispatch) => {
    request.then(data => data.data)
           .then(data => dispatch({ type: VIEW_NOTE, payload: data }))
           .catch(error => console.error(error))
  }
}

// View add note
export const VIEW_ADDNOTE = "VIEW_ADDNOTE";
export const viewAddNote = () => ({
  type: VIEW_ADDNOTE
})

// View edit note
export const VIEW_EDITNOTE = "VIEW_EDITNOTE";
export const viewEditNote = () => ({
  type: VIEW_EDITNOTE
})

// View delete note
export const VIEW_DELETENOTE = "VIEW_DELETENOTE";
export const viewDeleteNote = () => ({
  type: VIEW_DELETENOTE
})

// Add note
export const ADD_NOTE = "ADD_NOTE";
export const addNote = (title, textBody) => {
  const request = axios.post(`https://killer-notes.herokuapp.com/note/create`, {
    title, 
    textBody
  });

  return (dispatch) => {
    request.then(data => data.data)
           .then(data => dispatch({ type: ADD_NOTE, payload: data }))
           .catch(error => console.error(error))
  }
}

// Edit note
export const EDIT_NOTE = "EDIT_NOTE";
export const editNote = (title, textBody, _id) => {
  const request = axios.put(`https://killer-notes.herokuapp.com/note/edit/${_id}`, {
    title, 
    textBody
  });

  return (dispatch) => {
    request.then(data => data.data)
           .then(data => dispatch({ type: EDIT_NOTE, payload: data }))
           .catch(error => console.error(error))
  }
}

// Delete note
export const DELETE_NOTE = "DELETE_NOTE";
export const deleteNote = (_id) => {
  const request = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${_id}`);

  return (dispatch) => {
    request.then(data => data.data)
           .then(data => dispatch({ type: DELETE_NOTE, payload: data }))
           .catch(error => console.error(error))
  }
}

// Search note
export const SEARCH_NOTE = "SEARCH_NOTE";
export const searchNote = (searchValue) => ({
  type: SEARCH_NOTE,
  payload: searchValue
})

export const NO_SEARCH = "NO_SEARCH";
export const noSearch = () => ({
  type: NO_SEARCH
})