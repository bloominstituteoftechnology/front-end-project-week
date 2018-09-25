import React from 'react';
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADD_ERROR = 'ADD_ERROR';
export const UPDATE_ERROR = 'UPDATE_ERROR';
export const DELETE_ERROR = 'DELETE_ERROR';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const fetchNotes = () => {
    return dispatch => {
        dispatch({ type: FETCHING });
        const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');
        promise
        .then(response => {
            dispatch({
                type: FETCHED,
                payload: response.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: FETCH_ERROR })
        })
    }
}

export const addNewNote = (note) => {
    return dispatch => {
        dispatch({ type: ADDING });
        axios
        .post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => {
            console.log(response);
            dispatch({
                type: ADDED,
                payload: response.data
            });
        })
        .catch(err => {
            console.log(err);
            dispatch({ type: ADD_ERROR })
        })
    }
}

export const deleteNote = noteId => dispatch => {
    dispatch({ type: DELETING });
    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${noteId}`)
    .then(response => {
        dispatch({ type: DELETED, payload: response.data });
    })
    .catch(err => {
        dispatch({ type: DELETE_ERROR, payload: err });
    });
};

export const setUpdateNote = id => {
    return {
        type: SET_UPDATE_NOTE,
        payload: id,
    }
}

export const updateNote = note => dispatch => {
    dispatch({ type: UPDATING });
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${note._id}`, note)
    .then(response => {
        dispatch({ type: UPDATED, payload: response.data });
    })
    .catch(err => {
        dispatch({ type: UPDATE_ERROR, payload: err})
    })
}
