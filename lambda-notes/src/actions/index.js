import axios from 'axios';

/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const ADDING_NOTE_SUCCESS = 'ADDING_NOTE_SUCCESS';
export const ADDING_NOTE_FAILURE = 'ADDING_NOTE_FAILURE';
export const SHOW_NOTE = 'SHOW_NOTE';
export const GO_HOME = 'GO_HOME';
export const MIGHT_DELETE_NOTE = 'MIGHT_DELETE_NOTE';
export const CANCEL_DELETE_NOTE = 'CANCEL_DELETE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE_SUCCESS = 'DELETING_NOTE_SUCCESS';
export const DELETING_NOTE_FAILURE = 'DELETING_NOTE_FAILURE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const EDIT_NOTE_FAILURE = 'EDIT_NOTE_FAILURE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';

const getUrl = 'https://gimme-the-notes-server.herokuapp.com/notes/allTest/';
const postUrl = 'https://gimme-the-notes-server.herokuapp.com/notes/create';
const deleteUrl = 'https://gimme-the-notes-server.herokuapp.com/notes/delete';
const putUrl = 'https://gimme-the-notes-server.herokuapp.com/notes/edit';

const loginUrl = 'https://gimme-the-notes-server.herokuapp.com/login';

export const getNotes = id => dispatch => {
  // let's do some async stuff! Thanks react-thunk :)
  dispatch({ type: FETCHING_NOTES });
  axios

    .get(`${getUrl}${id}`)
    .then(response => {
      dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });
};

export const addNote = note => dispatch => {
  dispatch({ type: CREATE_NOTE });
  axios
    .post(postUrl, note)
    .then(response => {
      dispatch({ type: ADDING_NOTE_SUCCESS });
      return axios
        .get(`${getUrl}${note.user_id}`)
        .then(response => {
          dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
        });
    })
    .catch(error => {
      console.log(note);
      dispatch({ type: ADDING_NOTE_FAILURE, payload: error });
    });
};

export const showNote = note => dispatch => {
  dispatch({ type: SHOW_NOTE, payload: note });
};

export const goHome = () => dispatch => {
  dispatch({ type: GO_HOME, payload: '' });
};

export const showDeleteModal = () => dispatch => {
  dispatch({ type: MIGHT_DELETE_NOTE, payload: true });
};

export const hideDeleteModal = () => dispatch => {
  dispatch({ type: CANCEL_DELETE_NOTE, payload: false });
};

export const deleteNote = (id, note) => dispatch => {
  dispatch({ type: DELETE_NOTE });
  axios
    .delete(`${deleteUrl}/${id}`)
    .then(response => {
      dispatch({ type: DELETING_NOTE_SUCCESS, payload: id });

      return axios
        .get(`${getUrl}${note.user_id}`)
        .then(response => {
          dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
        });
    })

    .catch(error => {
      dispatch({ type: DELETING_NOTE_FAILURE, payload: error });
    });
};

export const editingNote = () => dispatch => {
  dispatch({ type: EDIT_NOTE });
};

export const logOut = () => dispatch => {
  dispatch({ type: LOGOUT });
};

export const LoginCheck = token => dispatch => {
  console.log("Hey I'm the token...", token);
  dispatch({ type: LOGIN, payload: token });
};

export const editNote = (id, note) => dispatch => {
  axios
    .put(`${putUrl}/${id}`, note)
    .then(response => {
      dispatch({ type: EDIT_NOTE_SUCCESS, payload: response });

      return axios
        .get(`${getUrl}${note.user_id}`)
        .then(response => {
          console.log('Crazy? the user_id is... ', note.id);
          dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data });
        })
        .catch(error => {
          dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
        });
    })

    .catch(error => {
      dispatch({ type: EDIT_NOTE_FAILURE, payload: error });
    });
};
