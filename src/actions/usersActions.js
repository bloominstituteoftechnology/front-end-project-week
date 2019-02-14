import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_USERS = 'GET_USERS';
export const GETTING_USERS = 'GETTING_USERS';
export const CREATING_USER = 'CREATING_USER';
export const CREATE_USER = 'CREATE_USER';
export const UPDATE_USER = 'UPDATE_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATING_USER = 'UPDATING_USER';
export const DELETING_USER = 'DELETING_USER';
export const SINGLE_USER = 'SINGLE_USER';
export const GETTING_SINGLE_USER = 'GETTING_SINGLE_USER';
export const TOGGLE_UPDATE_USER = 'TOGGLE_UPDATE_USER';




export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_USERS })
    axios
   // .get('https://fe-users.herokuapp.com/note/get/all')
   .get('http://localhost:5000/api/users')
   // .get('https://frontend-william.herokuapp.com/api/users')
      .then(response => {
        dispatch({ type: GET_USERS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const registerUser = (newUser) => {
  return (dispatch) => {
    dispatch({ type: CREATING_USER })
   // axios.post('https://frontend-william.herokuapp.com/api/users', newNote)
    axios.post('http://localhost:5000/api/users/register', newUser)  
    .then(response => {
        dispatch({ type: CREATE_USER, payload: response.data })
        alert('registration complete...')
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

/* export const updateNote = (newUser, id) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_USER })
   // const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
    const URL = 'http://localhost:5000/api/users/' + id;
    axios
      .put(URL, {
        title: newNote.title,
        textBody: newNote.textBody,
      })
      .then(response => {
        dispatch({ type: UPDATE_USER, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
} */

export const viewNote = (id) => {
  return (dispatch) => {
    dispatch({ type: GETTING_SINGLE_USER })
  // const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
    const URL = 'http://localhost:5000/api/users/' + id;
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: SINGLE_USER, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
   // const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
   const URL = 'http://localhost:5000/api/users/' + id;
    dispatch({ type: DELETING_USER })
    axios
      .delete(URL)
      .then(response => {
        dispatch({ type: DELETE_USER, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const updateSingleNote = note => {
  return {
    type: SINGLE_USER,
    payload: note
  };
};