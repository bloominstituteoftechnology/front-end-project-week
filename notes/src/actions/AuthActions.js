import axios from 'axios';
import jwt from 'jsonwebtoken';

const keyName = process.env.REACT_APP_TOKEN_ITEM;
const url = process.env.REACT_APP_API_URL;

export const AUTH_LOGIN = 'auth_login';
export const AUTH_LOGIN_SUCCESS = 'auth_login_success'
export const AUTH_LOGIN_FAILURE = 'auth_login_failure'
export const AUTH_REGISTER = 'auth_register';
export const AUTH_REGISTER_SUCCESS = 'auth_register_success';
export const AUTH_REGISTER_FAILURE = 'auth_register_failure';
export const AUTH_LOGOUT = 'auth_logout'



export const authLogin = credentials => async dispatch => {
    try {
        dispatch({
            type: AUTH_LOGIN
        })
        const response = await axios.post(`${url}/auth/login`, credentials);
        const token = response.token;
        localStorage.setItem(keyName, token);
        const userInfo = jwt.decode(token);

        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: userInfo
        })

    } catch(err) {
        dispatch({
            type: AUTH_LOGIN_SUCCESS,
            payload: {error: err}
        })
    }
}

export const authRegister = credentials => async dispatch => {
    try {
        dispatch({
            type: AUTH_REGISTER
        })
        const response = await axios.post(`${url}/auth/register`, credentials);
        const token = response.token;
        localStorage.setItem(keyName, token);
        const userInfo = jwt.decode(token);

        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: userInfo
        })

    } catch(err) {
        dispatch({
            type: AUTH_REGISTER_SUCCESS,
            payload: {error: err}
        })
    }
}

export const logout = async dispatch => {
    localStorage.removeItem(keyName);
    dispatch({type: AUTH_LOGOUT})
}
