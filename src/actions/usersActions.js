import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_USERS = 'GET_USERS';
export const GETTING_USERS = 'GETTING_USERS';
export const REGISTERING_USER = 'REGISTERING_USER';
export const REGISTER_USER = 'REGISTER_USER';
export const UPDATE_USER = 'UPDATE_USERS';
export const DELETE_USER = 'DELETE_USER';
export const UPDATING_USER = 'UPDATING_USER';
export const DELETING_USER = 'DELETING_USER';
export const LOGIN_USER = 'LOGIN_USER';
export const LOGGING_USER = 'LOGGING_USER';
export const TOGGLE_UPDATE_USER = 'TOGGLE_UPDATE_USER';




export const getUsers = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_USERS })
    axios
   // .get('https://fe-users.herokuapp.com/note/get/all')
   //.get('http://localhost:5000/api/users')
    .get('https://frontend-william.herokuapp.com/api/users')
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
    dispatch({ type: REGISTERING_USER })
    axios.post('https://frontend-william.herokuapp.com/api/users/register', newUser)
  // console.log("newUser:", newUser)
  // axios.post('http://localhost:5000/api/users/register', newUser)  
    .then(response => {
        dispatch({ type: REGISTER_USER, payload: response.data })
       
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

export const loginUser = (id) => {
  return (dispatch) => {
    dispatch({ type: LOGGING_USER })
   const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
   // const URL = 'http://localhost:5000/api/users/login/' + id;
    axios
      .post(URL)
      .then(response => {
        dispatch({ type: LOGIN_USER, payload: response.data })
        localStorage.setItem('jwt', response.data.token);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const deleteUser = (id) => {
  return (dispatch) => {
   const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
  // const URL = 'http://localhost:5000/api/users/' + id;
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

export const logoutUser = (id) => {
  return (dispatch) => {
    dispatch({ type: LOGGING_USER })
   const URL = 'https://frontend-william.herokuapp.com/api/users/' + id;
   // const URL = 'http://localhost:5000/api/users/login/' + id;
    axios
      .post(URL)
      .then(response => {
        dispatch({ type: LOGIN_USER, payload: response.data })
        localStorage.setItem('jwt', response.data.token);
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}
/* export const updateSingleNote = note => {
  return {
    type: LOGIN_USER,
    payload: note
  };
}; */