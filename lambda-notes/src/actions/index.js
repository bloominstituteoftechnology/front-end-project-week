import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';
export const REORDER_NOTES = 'REORDER_NOTES';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGGING_IN = 'LOGGING_IN';
export const SIGNING_IN = 'SIGNING_IN';
export const USER_REGISTERED = 'USER_REGISTERED';

// USER

const URL = 'https://wsw-backendproject.herokuapp.com';

export const login = (data, history) => {
  const user = axios.post(`${URL}/login`, {
    username: data.username,
    password: data.password
  });
  return dispatch => {
    dispatch({ type: LOGGING_IN });
    user
      .then(res => {
        localStorage.setItem('notesToken', res.data.token);
        dispatch({ type: LOGGED_IN, payload: res.data.token });
        history.push('/list');
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
        alert('There was a user error while logging in, please try again');
      });
  };
};

export const signin = data => {
  const user = axios.post(`${URL}/register`, {
    email: data.email,
    password: data.password
  });
  return dispatch => {
    dispatch({ type: SIGNING_IN });
    user
      .then(({ newUser }) => {
        dispatch({ type: USER_REGISTERED, payload: newUser });
        alert('You are registered. Please login below.');
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
        alert('The email already exists, try another email');
      });
  };
};

// NOTES

export const getNotes = () => dispatch => {
  dispatch({ type: FETCHING });

  axios
    .get(`${URL}/api/viewnotes`)

    .then(response => {
      dispatch({ type: FETCHED, notes: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'Error fetching the data' });
    });
};

// PRE-BACK-END WEEK

export const addNote = data => {
  return {
    type: ADD_NOTE,
    title: data.title,
    text: data.text,
    id: Math.floor(Math.random() * 1000 + 1)
  };
};

export const updateNote = data => ({
  type: UPDATE_NOTE,
  // QUESTION: Better to do this here or in reducers???
  id: Number(data.id),
  title: data.title,
  text: data.text
});

export const deleteNote = data => ({
  type: DELETE_NOTE,
  id: Number(data)
});

export const reorderNotes = newNotes => {
  return {
    type: 'REORDER_NOTES',
    payload: newNotes
  };
};
