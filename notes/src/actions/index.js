import React from 'react';
import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';
export const ERROR = 'ERROR';

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
            dispatch({ type: ERROR })
        })
    }
}