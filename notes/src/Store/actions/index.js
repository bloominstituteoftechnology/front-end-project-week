import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const FETCHING_DATA = 'FETCHING_DATA';
export const FETCHED_DATA = 'FETCHED_DATA';
export const ERROR = 'ERROR';

export const FETCH_TASKS = 'FETCH_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const COMPLETE = 'COMPLETE';

export const getData = () => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .get('https://killer-notes.herokuapp.com/note/get/all')
      .then(response =>
        dispatch({ type: FETCHED_DATA, payload: response.data })
      )
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const addNote = note => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .post('https://killer-notes.herokuapp.com/note/create', note)
      .then(response =>
        dispatch({
          type: ADD_NOTE,
          payload: {
            title: note.title,
            textBody: note.textBody,
            id: response.data.success
          }
        })
      )
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const deleteNote = id => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
      .then(response => dispatch({ type: DELETE_NOTE, id }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const editNote = note => {
  return dispatch => {
    dispatch({ type: FETCHING_DATA });
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
      .then(response => dispatch({ type: EDIT_NOTE, payload: response.data }))
      .catch(err => dispatch({ type: ERROR, err }));
  };
};

export const getTasks = () => {
  return { type: FETCH_TASKS };
};

export const addTask = task => {
  return { type: ADD_TASK, payload: task };
};

export const complete = taskId => {
  return { type: COMPLETE, payload: taskId };
};
