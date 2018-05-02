import axios from 'axios';
axios.defaults.withCredentials = true;
const ROOT_URL =
  'mongodb://test:test@ds163769.mlab.com:63769/lambda-notes-project';

export const NOTE_ERROR = 'NOTE_ERROR';
export const UPDATE_SELECTED = 'UPDATE_SELECTED';
export const GET_NOTES = 'GET_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';

export const USER_REGISTERED = 'USER_REGISTERED';
export const USER_AUTHENTICATED = 'USER_AUTHENTICATED';
export const USER_UNAUTHENTICATED = 'USER_UNAUTHENTICATED';
export const AUTHENTICATION_ERROR = 'AUTHENTICATION_ERROR';
export const CHECK_IF_AUTHENTICATED = 'CHECK_IF_AUTHENTICATED';

export const authError = error => {
  return {
    type: AUTHENTICATION_ERROR,
    payload: error
  };
};

export const noteError = error => {
  return {
    type: NOTE_ERROR,
    payload: error
  };
};

export const updateSelected = id => {
  return {
    type: UPDATE_SELECTED,
    payload: id
  };
};

export const getNotes = users => {
  const token = localStorage.getItem('token');
  return dispatch => {
    axios
      .post(
        `${ROOT_URL}/home`,
        { users },
        { headers: { authorization: token } }
      )
      .then(response => {
        dispatch({
          type: GET_NOTES,
          payload: response.data
        });
      })
      .catch(() => {
        dispatch(noteError('Failed to fetch notes'));
      });
  };
};

export const createNote = noteObj => {
  const token = localStorage.getItem('token');
  const { title, text, users } = noteObj;
  return dispatch => {
    axios
      .post(
        `${ROOT_URL}/create`,
        { title, text, users },
        { headers: { authorization: token } }
      )
      .then(response => {
        dispatch({ type: CREATE_NOTE, payload: response.data });
      })
      .catch(error => {
        dispatch(noteError('Failed to add note'));
      });
  };
};

export const editNote = noteObj => {
  const token = localStorage.getItem('token');
  const { title, text, id } = noteObj;
  return dispatch => {
    axios
      .put(
        `${ROOT_URL}/edit/${id}`,
        { title, text, id },
        { headers: { authorization: token } }
      )
      .then(response => {
        dispatch({ type: EDIT_NOTE, payload: response.data });
      })
      .catch(() => {
        dispatch(noteError('Failed to edit note'));
      });
  };
};

export const deleteNote = id => {
  const token = localStorage.getItem('token');
  return dispatch => {
    axios
      .delete(`${ROOT_URL}/note/${id}`, { headers: { authorization: token } })
      .then(response =>
        dispatch({
          type: DELETE_NOTE,
          payload: id
        })
      )
      .catch(() => {
        dispatch(noteError('Failed to delete note'));
      });
  };
};

export const register = (username, password, confirmPassword, history) => {
  return dispatch => {
    if (password !== confirmPassword) {
      dispatch(authError('Passwords do not match'));
      return;
    }
    axios
      .post(`${ROOT_URL}/register`, { username, password })
      .then(() => {
        dispatch({
          type: USER_REGISTERED
        });
        history.push('/login');
      })
      .catch(() => {
        dispatch(authError('Failed to register user'));
      });
  };
};

export const login = (username, password, history) => {
  return dispatch => {
    axios
      .post(`${ROOT_URL}/login`, { username, password })
      .then(result => {
        dispatch({
          type: USER_AUTHENTICATED,
          payload: username
        });
        localStorage.setItem('token', result.data.token);
        history.push('/home');
      })
      .catch(() => {
        dispatch(authError('Incorrect username/password combo'));
      });
  };
};

export const logout = () => {
  return dispatch => {
    localStorage.removeItem('token');
    dispatch({ type: USER_UNAUTHENTICATED });
  };
};
