import * as types from './types';
import axios from 'axios';
import * as types from './types';

function requestLogin(creds){
    return {
        type: types.LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

function receiveLogin(user){
    return {
        type: types.LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        token: user.token
    }
}

function loginError(message){
    return {
        type: types.LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

function requestLogout() {
    return {
      type: LOGOUT_REQUEST,
      isFetching: true,
      isAuthenticated: true
    }
  }
  
  function receiveLogout() {
    return {
      type: LOGOUT_SUCCESS,
      isFetching: false,
      isAuthenticated: false
    }
  }

//call API to get token and dispatches action along the way, also add token to localStorage
export const loginUser = async (creds) => {
    return dispatch => {
        dispatch(requestLogin(creds));
        try {
            const response = await axios.post(`${process.env.REACT_APP_API}/api/users/login` || 'http://localhost:8000/api/users/login', creds);
            if (response) {
                localStorage.setItem('jwtToken', request) 
                dispatch(receiveLogin)
            }
        } catch (error) {
            dispatch(loginError(error.message));
        }
    }
}

//call API to remove token from local storage
export const logoutUser = () => {
    return dispatch => {
      dispatch(requestLogout());
      localStorage.removeItem('jwtToken');
      dispatch(receiveLogout());
    }
  }