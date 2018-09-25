import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const SAVING_NOTES = 'SAVING_NOTES';
export const SAVED_NOTES = 'SAVED_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const UPDATED_NOTES = 'UPDATED_NOTES';
export const DELETING_NOTES = 'DELETING_NOTES';
export const DELETED_NOTES = 'DELETED_NOTES';
export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTERED_USER = 'REGISTERED_USER';
export const LOGGING_IN_USER = 'LOGGING_IN_USER';
export const LOGGED_IN_USER = 'LOGGED_IN_USER';
export const LOGGING_OUT_USER = 'LOGGING_OUT_USER';
export const LOGGED_OUT_USER = 'LOGGED_OUT_USER';
export const ERROR = 'ERROR';

const url = `http://localhost:9000/notes`;

export const fetchNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTES });

    axios
      .get(url)
      .then(res => {
        dispatch({ type: FETCHED_NOTES, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const fetchNote = noteId => {
  return dispatch => {
    dispatch({ type: FETCHING_NOTE });

    axios
      .get(`${url}/${noteId}`)
      .then(res => {
        dispatch({ type: FETCHED_NOTE, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const addNote = (note, history) => {
  return dispatch => {
    dispatch({ type: SAVING_NOTES });
    axios
      .post(url, {
        title: note.title,
        content: note.content
        // tags: note.tags
      })
      .then(res => {
        dispatch({ type: SAVED_NOTES, payload: res.data });
      })
      .then(() => history.push('/'))
      .catch(err => {
        dispatch({ type: ERROR, payload: err });
      });
  };
};

export const deleteNote = (NoteId, history) => {
  return dispatch => {
    dispatch({ type: DELETING_NOTES });
    axios
      .delete(`${url}/${NoteId}`)
      .then(res => {
        dispatch({ type: DELETED_NOTES });
      })
      .then(() => history.push('/'))
      .catch(err => {
        dispatch({ TYPE: ERROR, payload: err });
      });
  };
};

export const updateNote = note => {
  return dispatch => {
    dispatch({ type: UPDATING_NOTES });
    axios
      .put(`${url}/${note.id}`, {
        title: note.title,
        content: note.content
        // tags: note.tags
      })
      .then(res => {
        dispatch({ type: UPDATED_NOTES, payload: res.data });
      })
      .catch(err => {
        dispatch({ TYPE: ERROR, payload: err });
      });
  };
};

export const registerUser = (user, history) => {
  return dispatch => {
    dispatch({ type: REGISTERING_USER });

    axios
      .post(`http://localhost:9000/register`, user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: REGISTERED_USER });
      })
      .then(() => history.push('/'))
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response.data.message });
      });
  };
};

export const loginUser = (user, history) => {
  return dispatch => {
    dispatch({ type: LOGGING_IN_USER });

    axios
      .post(`http://localhost:9000/login`, user)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        dispatch({ type: LOGGED_IN_USER });
      })
      .then(() => history.push('/'))
      .catch(err => {
        dispatch({ type: ERROR, payload: err.response.data.message });
      });
  };
};

export const logoutUser = history => {
  return dispatch => {
    dispatch({ type: LOGGING_OUT_USER });
    localStorage.removeItem('token');
    dispatch({ type: LOGGED_OUT_USER });
    history.push('/login');
  };
};
