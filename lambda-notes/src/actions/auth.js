import axios from 'axios';

export const SIGNING_IN = 'SIGNING_IN';
export const SIGNED_IN = 'SIGNED_IN';

export const SIGNING_UP = 'SIGNING_UP';
export const SIGNED_UP = 'SIGNED_UP';

export const CHECKING_TOKEN = 'CHECKING_TOKEN';
export const TOKEN_CHECKED = 'TOKEN_CHECKED';

export const SET_SIGNIN = 'SET_SIGNIN'

export const ERROR = 'ERROR';

export const signIn = credentials => {
    const promise = axios.post(`http://localhost:8000/api/users/login`, credentials);
    return dispatch => {
        dispatch({ type: SIGNING_IN });
        promise.then(response => {
            localStorage.setItem('token', response.data);
            dispatch({ type: SIGNED_IN, payload: response.data })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const signUp = user => {
    const promise = axios.post(`http://localhost:8000/api/users/register`, user);
    return dispatch => {
        dispatch({ type: SIGNING_UP });
        promise.then(response => {
            localStorage.setItem('token', response.data.token);
            dispatch({ type: SIGNED_UP, payload: response.data })
        })
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const checkToken = token => {
    const promise = axios.get(`http://localhost:8000/api/users/auth`, { headers: { Authorization: token } });
    return dispatch => {
        dispatch({ type: CHECKING_TOKEN });
        promise.then(response => dispatch({ type: TOKEN_CHECKED, payload: response.data.success }))
            .catch(err => dispatch({ type: ERROR, payload: err }));
    }
}

export const setSignIn = () => {
    return {
        type: SET_SIGNIN,
        payload: null
    }
}