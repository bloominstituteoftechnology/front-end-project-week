import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const FETCH_DATA = 'FETCH_DATA';
export const GET_DATA = 'GET_DATA';
export const ERROR = 'ERROR';

export const GET_TASKS = 'GET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const COMPLTETE = 'COMPLTETE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get('http://localhost:7777/api/notes')
      .then(response => dispatch({ type: GET_DATA, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post('http://localhost:7777/api/notes', note)
      .then(response =>
        dispatch({
          type: ADD_NOTE,
          payload: {
            title: note.title,
            textBody: note.textBody,
            id: response.data.success,
          },
        })
      )
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .delete(`http://localhost:7777/api/notes/${id}`)
      .then(response => dispatch({ type: DELETE_NOTE, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const editNote = note => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .put(`http://localhost:7777/api/notes/${note._id}`, note)
      .then(response => dispatch({ type: EDIT_NOTE, payload: response }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

// Task Actions

export const getTasks = () => {
  return { type: GET_TASKS };
};

export const addTask = task => {
  return { type: ADD_TASK, payload: task };
};

export const complete = taskId => {
  return { type: COMPLTETE, payload: taskId };
};
