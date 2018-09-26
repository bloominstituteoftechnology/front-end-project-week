import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const SUCCESS_FETCHING_NOTES = 'SUCCESS_FETCHING_NOTES';
export const FAIL_FETCHING_NOTES = 'FAIL_FETCHING_NOTES';

export const START_ADD_NOTE = 'START_ADD_NOTE';
export const SUCCESS_ADD_NOTE = 'SUCCESS_ADD_NOTE';
export const FAILURE_ADD_NOTE = 'FAILURE_ADD_NOTE';

export const START_DELETE_NOTE = 'START_DELETE_NOTE';
export const SUCCESS_DELETE_NOTE = 'SUCCESS_DELETE_NOTE';
export const FAILURE_DELETE_NOTE = 'FAILURE_DELETE_NOTE';

export const START_UPDATE_NOTE = 'START_UPDATE_NOTE';
export const SUCCESS_UPDATE_NOTE = 'SUCCESS_UPDATE_NOTE';
export const FAILURE_UPDATE_NOTE = 'FAILURE_UPDATE_NOTE';


export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });

    axios.get('https://killer-notes.herokuapp.com/note/get/all')
      .then(res => {
        dispatch({ type: SUCCESS_FETCHING_NOTES, payload: res.data })
      })
      .catch(err => {
        dispatch({ type: FAIL_FETCHING_NOTES , payload: err })
      });
  }
}

export const addNote = note => dispatch => {
  dispatch({ type: START_ADD_NOTE });

  axios.post('https://killer-notes.herokuapp.com/note/create', note)
    .then(res => {
      dispatch({ type: SUCCESS_ADD_NOTE, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE_ADD_NOTE , payload: err })
    });
}

export const deleteNote = noteId => dispatch => {
  dispatch({ type: START_DELETE_NOTE })

  axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(res => {
      dispatch({ type: SUCCESS_DELETE_NOTE, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE_DELETE_NOTE, payload: err })
    });
}


export const setUpdateNote = id => {
  return {
    type: SET_UPDATE_NOTE,
    payload: id
  };
};

export const updateNote = note => dispatch => {
  dispatch({ type: START_UPDATE_NOTE })

  axios.put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(res => {
      dispatch({ type: SUCCESS_UPDATE_NOTE, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FAILURE_UPDATE_NOTE, payload: err })
    });
}
  