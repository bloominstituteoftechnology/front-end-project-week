import axios from 'axios';
const url = 'https://fe-notes.herokuapp.com/';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const ADDING_NOTE = 'ADDING_NOTE';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const SELECTING_NOTE = 'SELECTING_NOTE';
export const SELECT_NOTE_SUCCESS = 'SELECT_NOTE_SUCCESS';
export const SELECT_NOTE_FAILURE = 'SELECT_NOTE_FAILURE';

export const EDITING_NOTE = 'EDITING_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const STOP_EDITING = 'STOP_EDITING';

export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const EXPORTING_NOTES = 'EXPORTING_NOTES';
export const EXPORT_NOTES_SUCCESS = 'EXPORT_NOTES_SUCCESS';
export const EXPORT_NOTES_FAILURE = 'EXPORT_NOTES_FAILURE';

export const fetchNotes = () => dispatch => {
  dispatch({type: FETCHING_NOTES});
  axios
    .get(`${url}note/get/all`)
    .then(res => {
      dispatch({type: FETCH_NOTES_SUCCESS, payload: res.data});
    })
    .catch(err => {
      dispatch({type: FETCH_NOTES_FAILURE, payload: err});
    });
};

export const addNote = note => dispatch => {
  dispatch({type: ADDING_NOTE});
  axios
    .post(`${url}note/create`, note)
    .then(res => {
      dispatch({type: ADD_NOTE_SUCCESS, payload: note});
    })
    .catch(err => {
      dispatch({type: ADD_NOTE_FAILURE, payload: err});
    });
};

export const selectNote = id => dispatch => {
  dispatch({type: SELECTING_NOTE, payload: id});
};

export const startEditMode = () => dispatch => {
  dispatch({type: EDITING_NOTE});
};

export const stopEditMode = () => dispatch => {
  dispatch({type: STOP_EDITING});
};

export const editNote = note => dispatch => {
  axios
    .put(`${url}note/edit/${note._id}`, {
      title: note.title,
      textBody: note.textBody,
    })
    .then(res => {
      dispatch({type: EDIT_NOTE_SUCCESS, payload: res.data});
    })
    .catch(err => console.log(err));
};

export const showModal = () => dispatch => {
  dispatch({type: SHOW_MODAL});
};

export const hideModal = () => dispatch => {
  dispatch({type: HIDE_MODAL});
};

export const deleteNote = id => dispatch => {
  dispatch({type: DELETING_NOTE, payload: id});
  axios
    .delete(`${url}note/delete/${id}`)
    .then(res => {
      dispatch({type: DELETE_NOTE_SUCCESS});
    })
    .catch(err => {
      dispatch({type: DELETE_NOTE_FAILURE, payload: err});
    });
};

export const exportToCsv = notes => dispatch => {
  dispatch({type: EXPORTING_NOTES});
  const rows = ['title', 'textBody'];
  const data = notes.map(n => {
    return `${n.title},${n.textBody}\n`;
  });
  return rows.join(',') + '\n' + data;
};
