import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const GET_DATA = 'GET_DATA';
export const GET_A_NOTE = 'GET_A_NOTE';
export const FETCH_DATA = 'FETCH_DATA';
export const ERROR = 'ERROR';

export const GET_TASKS = 'GET_TASK';
export const ADD_TASK = 'ADD_TASK';
export const COMPLTETE = 'COMPLTETE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get('https://lambda-notes-board.herokuapp.com/api/notes')
      .then(response => {
        dispatch({ type: GET_DATA, payload: response.data });
      })
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const getANote = id => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .get(`https://lambda-notes-board.herokuapp.com/api/notes/${id}`)
      .then(response => dispatch({ type: GET_A_NOTE, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .post('https://lambda-notes-board.herokuapp.com/api/notes', note)
      .then(response => {
        dispatch({
          type: ADD_NOTE,
          payload: {
            _id: response.data._id,
            title: note.title,
            textBody: note.textBody,
          },
        });
      })
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .delete(`https://lambda-notes-board.herokuapp.com/api/notes/${id}`)
      .then(response => dispatch({ type: DELETE_NOTE, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const editNote = note => {
  return dispatch => {
    dispatch({ type: FETCH_DATA });
    axios
      .put(
        `https://lambda-notes-board.herokuapp.com/api/notes/${note._id}`,
        note
      )
      .then(response =>
        dispatch({ type: EDIT_NOTE, payload: response.data.note })
      )
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
