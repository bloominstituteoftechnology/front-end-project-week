import axios from 'axios';

export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const POST_NOTE = 'POST_NOTE';
export const POST_NOTE_SUCCESS = 'POST_NOTE_SUCCESS';
export const POST_NOTE_FAILURE = 'POST_NOTE_FAILURE';

export const PUT_NOTE = 'PUT_NOTE';
export const PUT_NOTE_SUCCESS = 'PUT_NOTE_SUCCESS';
export const PUT_NOTE_FAILURE = 'PUT_NOTE_FAILURE';

export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const FETCH_NOTE_ID = 'FETCH_NOTE_ID';
export const FETCH_NOTE_ID_SUCCESS = 'FETCH_NOTE_ID_SUCCESS';
export const FETCH_NOTE_ID_FAILURE = 'FETCH_NOTE_ID_FAILURE';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS='REGISTER_SUCCESS';
export const REGISTER_FAILURE='REGISTER_FAILURE';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS='LOGIN_SUCCESS';
export const LOGIN_FAILURE='LOGIN_FAILURE';

const url = `https://lambda-notes-backend-kyran.herokuapp.com/notes`;

const authURL = `https://lambda-notes-backend-kyran.herokuapp.com/auth`;

const token = localStorage.getItem('jwt');
if (token) {
  axios.defaults.headers.common['authorization'] = token;
}


export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCH_NOTES });
    axios
      .get(`${url}/get/all`)
      .then(response => {
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_NOTES_FAILURE, payload: error });
      });

}

export const addNote = note => dispatch => {
  dispatch({ type: POST_NOTE });
    axios
      .post(`${url}/create`, note)
      .then(response => {
        dispatch({ type: POST_NOTE_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: POST_NOTE_FAILURE, payload: error });
      });
}

export const editNote = note => dispatch => {
  dispatch({ type: PUT_NOTE });
    axios
      .put(`${url}/edit/${note.id}`, note)
      .then(response => {
        dispatch({ type: PUT_NOTE_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: PUT_NOTE_FAILURE, payload: error});
      });
}

export const deleteNote = id => dispatch => {
  dispatch({ type: DELETE_NOTE });
    axios
      .delete(`${url}/delete/${id}`)
      .then(response => {
        dispatch({ type: DELETE_NOTE_SUCCESS});
      })
      .catch(error => {
        dispatch({ type: DELETE_NOTE_FAILURE, payload: error });
      });
}

export const fetchNoteById = id => dispatch => {
  console.log('fetching', id);
    dispatch({ type: FETCH_NOTE_ID })
    axios
      .get(`${url}/get/${id}`)
      .then(response => {
        dispatch({ type: FETCH_NOTE_ID_SUCCESS, payload: response.data });
      })
      .catch(error => {
        dispatch({ type: FETCH_NOTE_ID_FAILURE, payload: error });
      })
}

export const registerUser = (user) => dispatch => {
  console.log('registering');
  dispatch({ type: REGISTER })
  axios
    .post(`${authURL}/signup`, user)
    .then(response => {
      console.log('register', response);
      dispatch({ type: REGISTER_SUCCESS, payload: {
         user: response.data.username,
      }});
      localStorage.setItem('jwt', response.data.token);
    })
    .catch(error => {
      dispatch({ type: REGISTER_FAILURE, payload: error });
    })
}

export const loginUser = user => dispatch => {
    dispatch({ type: LOGIN })
    axios
      .post(`${authURL}/signin`, user)
      .then(response => {
        console.log('login', response);
        dispatch({ type: LOGIN_SUCCESS, payload: {
         user: response.data.username,
       }});
       localStorage.setItem('jwt', response.data.token);
      })
      .catch(error => {
        dispatch({ type: LOGIN_FAILURE, payload: error })
      })
  }
