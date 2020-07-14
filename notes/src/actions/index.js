import axios from 'axios';
import { Action } from 'rxjs/internal/scheduler/Action';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const fetchAll = () => {
    return function(dispatch) {
        dispatch({ type: FETCHING });
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(response => {
                dispatch({ type: SUCCESS, payload: response.data })
                
            })
            .catch(error => {
                dispatch({ type: FAILURE, payload: error })
            })
    }
}

export const FETCHING_NOTE = 'FETCHING_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const fetchNote = id => {
    return function(dispatch) {
        dispatch({ type: FETCHING_NOTE });
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(response => {
                dispatch({ type: FETCHED_NOTE, payload: response.data })
            })
            .catch(error => {
                dispatch({ type: FETCH_FAILURE, payload: error })
            });
    }
}

export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const ADD_FAILURE = 'ADD_FAILURE';

export const addNote = note => {
    return function(dispatch) {
        dispatch({ type: ADDING });
        axios
            .post('https://fe-notes.herokuapp.com/note/create', note)
            .then(response => {
                console.log(response);
                dispatch({ 
                    type: ADDED,
                    payload: response.data 
                })
            })
            .catch(error => {
                dispatch({ 
                    type: ADD_FAILURE,
                    payload: error 
                })
            })
    }
}

export const EDITING = 'EDITING';
export const EDITED = 'EDITED';
export const EDIT_FAILURE = 'EDIT_FAILURE';

export const editNote = (id, note) => {
    return function(dispatch) {
        dispatch({ type: EDITING });
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
            .then(response => {
                dispatch({
                    type: EDITED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({
                    type: EDIT_FAILURE,
                    payload: error
                })
            })
            
    }
}

export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const deleteNote = id => {
    return function(dispatch) {
        dispatch({ type: DELETING });
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(response => {
                dispatch({ 
                    type: DELETED,
                    payload: response.data
                })
            })
            .catch(error => {
                dispatch({ 
                    type: DELETE_FAILURE,
                    payload: error
                })
            })
    }
}

export const setUpState = (title, body, id) => {
    return function(dispatch) {

        dispatch({
            type: 'TITLESET', payload: title
        });
        dispatch({
            type: 'BODYSET', payload: body
        });
        dispatch({
            type: 'IDSET', payload: id
        });
    }
}