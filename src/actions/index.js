import axios from 'axios';

const ROOT_URL = 'https://kawaii-notes.herokuapp.com/api';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const NOTE_UPDATED = 'NOTE_UPDATED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';

export const ERROR = 'ERROR';

export const register = (username, password) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/signup`, { username, password })
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: USER_AUTHENTICATED, payload: response });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const login = (username, password) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/login`, { username, password })
      .then(response => {
        window.localStorage.setItem('token', response.data.token);
        dispatch({ type: USER_AUTHENTICATED, payload: response });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const logout = () => {
  return dispatch => {
    window.localStorage.removeItem('token');
    dispatch({ type: USER_UNAUTHENTICATED });
    window.location.reload();
  };
};

export const persistLogIn = () => {
  return dispatch => {
    dispatch({ type: USER_AUTHENTICATED });
  };
};

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });
    axios
      .get(`${ROOT_URL}/notes`, {
        headers: { Authorization: window.localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: NOTES_FETCHED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: ADDING_NOTE });
    axios
      .post(`${ROOT_URL}/new`, note, {
        headers: { Authorization: window.localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: NOTE_ADDED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const updateNote = note => {
  return dispatch => {
    dispatch({ type: UPDATING_NOTE });
    axios
      .put(`${ROOT_URL}/edit`, note, {
        headers: { Authorization: window.localStorage.getItem('token') }
      })
      .then(response => {
        dispatch({ type: NOTE_UPDATED, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios({
      url: `${ROOT_URL}/delete`,
      method: 'delete',
      data: { id },
      headers: { Authorization: window.localStorage.getItem('token') }
    })
      .then(response => {
        dispatch({ type: NOTE_DELETED, payload: id });
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error });
      });
  };
};
