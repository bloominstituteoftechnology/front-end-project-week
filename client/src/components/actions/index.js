import axios from 'axios';

export const REQUEST_ALL_NOTES = 'REQUEST_ALL_NOTES';
export const RECEIVE_ALL_NOTES = 'RECEIVE_ALL_NOTES';
export const ERROR = 'ERROR';

export const requestAllNotes = () => {
  return {
    type: REQUEST_ALL_NOTES,
  };
}

export const receiveAllNotes = res => {
  return {
    type: RECEIVE_ALL_NOTES,
    notes: res.data
  }
}

export const getAllNotes = () => {
  return dispatch => {
    dispatch(requestAllNotes());
    return axios.get('https://fe-notes.herokuapp.com/note/get/all')
      .then(res => dispatch(receiveAllNotes(res)))
      .catch(err => {
        console.log(err);
      });
  }
}

export const REQUEST_DELETE_NOTE = 'REQUEST_DELETE_NOTE';
export const requestDeleteNote = () => {
  return {
    type: REQUEST_DELETE_NOTE,
  }
}

export const DID_DELETE_NOTE = 'DID_DELETE_NOTE';
export const didDeleteNote = delId => {
  return {
    type: DID_DELETE_NOTE,
    delId,
  };
}

export const deleteNote = id => {
  return dispatch => {
    dispatch(requestDeleteNote());
    return axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(res => dispatch(didDeleteNote(id)))
      .catch(err => console.log(err))
  }
}

export const REQUEST_FILTER_NOTES = 'REQUEST_FILTER_NOTES';
export const requestFilterNotes = () => {
  return {
    type: REQUEST_FILTER_NOTES,
  }
}

export const RECEIVE_FILTER_NOTES = 'RECEIVE_FILTER_NOTES';
export const receiveFilterNotes = () => {
  return {
    type: RECEIVE_FILTER_NOTES,
  }
}

export const LOGOUT = 'LOGOUT';
export const logout = () => {
  return {
    type: LOGOUT,
  }
}

export const LOGIN = 'LOGIN';
export const login = () => {
  return {
    type: LOGIN,
  }
}

export const CREATE_ACCOUNT = 'CREATE_ACCOUNT';
export const createAccount = (userName, password) => {
  return {
    type: CREATE_ACCOUNT,
    userName,
    password,
  }
}

export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';
export const deleteAccount = () => {
  return {
    type: DELETE_ACCOUNT,
  }
}
