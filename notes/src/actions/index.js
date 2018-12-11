// Imports
import axios from 'axios';

// Action Type Exports
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATE_SUCCESS = 'CREATE_SUCCESS';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCH_NOTE = 'FETCH_NOTE';
export const FETCH_ALL_SUCCESS = 'FETCH_ALL_SUCCESS';
export const FETCH_ONE_SUCCESS = 'FETCH_ONE_SUCCESS';
export const FETCH_FAIL = 'FETCH_FAIL';

// Action Creators

// C - Create
export const createNote = newNote => dispatch => {
    dispatch({type: CREATE_NOTE});
    axios
        .post(`https://fe-notes.herokuapp.com/note/create`, newNote)
        .then(resp => {
            console.log(dispatch)
            dispatch({
                type: CREATE_SUCCESS,
                payload: resp
            })
        })
        .catch(err => {
            dispatch({
                type: FETCH_FAIL,
                payload: err
            })
        });
}

// R - Read
export const fetchAllData = () => dispatch => {
    dispatch({type: FETCH_NOTES});
    
    axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(resp => {
            return dispatch({
                type: FETCH_ALL_SUCCESS,
                payload: resp.data
            });
        })
        .catch(err => {
            return dispatch({
                type: FETCH_FAIL,
                payload: err
            });
        });
}

export const fetchUniqueData = id => dispatch => {
    dispatch({type: FETCH_NOTE});
    axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(resp => {
            return dispatch({
                type: FETCH_ONE_SUCCESS,
                payload: resp.data
            });
        })
        .catch(err => dispatch({
            type: FETCH_FAIL,
            payload: err
        }));
}