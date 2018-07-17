import axios from 'axios';

//Declare action type const
import * as types from './types';

export const fetchNotes = () => {
    return (dispatch) => {
        axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => dispatch({
            type: types.FETCH_NOTES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}

export const fetchSingleNote = (id) => {
    return (dispatch) => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => dispatch({
            type: types.FETCH_SINGLE_NOTE,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}

export const deleteNote = (id) => {
    return (dispatch) => {
        axios.get(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        .then(response => dispatch({
            type: types.DELETE_NOTE,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}