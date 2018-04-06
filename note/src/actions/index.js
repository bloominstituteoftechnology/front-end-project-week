// import moment from 'moment';
import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGN_IN = 'SIGN_IN';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const SORT_LIST = 'SORT_LIST';

const URL = 'http://localhost:5000/api';

export const signUp = (newUser) => {
  if(newUser.email === '' || newUser.password === ''){
    return {
      type: LOGIN_ERROR,
      payload: 'Please enter Email and Password'
    }
  }else{
    return (dispatch) => {
      console.log(newUser);
      axios.post(`${URL}/users`, {
        email: newUser.email,
        password: newUser.password
      }).then(newUser => {
          dispatch({
            type: LOGGED_IN,
            payload: newUser
          });
      }).catch(err => console.log(err))
    }
  }
}

export const signIn = (user) => {
  if(user.email === '' || user.password === ''){
    return {
      type: LOGIN_ERROR,
      payload: 'Please enter Email and Password'
    }
  }else{
    return (dispatch) => {
      axios.post(`${URL}/login`, {
        email: user.email,
        password: user.password
      })
      .then(userResObj => {
        console.log(userResObj.data.user);
        dispatch({
          type: LOGGED_IN,
          payload: userResObj.data.user
        });
        localStorage.setItem('userId', userResObj.data.user._id);
        localStorage.setItem('email', userResObj.data.user.email);
        localStorage.setItem('token', userResObj.data.token);
        console.log(localStorage.getItem('userId'));
        console.log(localStorage.getItem('email'));
        console.log(localStorage.getItem('token'));
      })
    }
  }
}

export const fetchNotes = (userId) => {
  return (dispatch) => {
    dispatch({
      type: FETCHING_NOTES
    });
    // localStorage.setItem('userId', userResObj.data.user._id);
    // localStorage.setItem('email', userResObj.data.user.email);
    // localStorage.setItem('token', userResObj.data.token);
    console.log(localStorage.getItem('userId'));
    console.log(localStorage.getItem('email'));
    console.log(localStorage.getItem('token'));
    axios.get(`${URL}/users/${userId}`, 
    { headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` } })
    .then(resObj => {
      console.log(resObj);
      dispatch({
        type: FETCHED_NOTES,
        payload: resObj.notes
      });
    })
  }
}

export const toggleModal = (id) => {
  return {type: TOGGLE_MODAL, payload: id}
}

export const sortList = (type) => {
  return ({
    type: SORT_LIST,
    payload: type
  });
}

export const signOut = () => {
  localStorage.clear();
  return {
    type: LOGGED_OUT
  };
}