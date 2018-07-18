import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const UPDATING_NOTES = 'UPDATING_NOTES';
export const DELETING_NOTE = 'DELETING_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const SHOW_MODAL = 'SHOW_MODAL';
export const HIDE_MODAL = 'HIDE_MODAL';

export const getNotes = () => {
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all')
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const getNote = id => {
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const addNote = note => {
    const promise = axios.post('https://killer-notes.herokuapp.com/note/create/', note)
    return dispatch => {
        dispatch({ type: ADDING_NOTE })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}

export const updateNote = note => {
    const promise = axios.put(`https://killer-notes.herokuapp.com/note/edit/${note.id}`, note)
    return dispatch => {
        dispatch({ type: UPDATING_NOTES })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload:err
            })
        })
    }
}

export const deleteNote = id => {
    const promise = axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    return dispatch => {
        dispatch({ type: DELETING_NOTE })
        promise.then(response => {
            dispatch({
                type: SUCCESS,
                payload: response.data
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                payload: err
            })
        })
    }
}