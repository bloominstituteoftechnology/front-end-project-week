import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTE';

export const NOTE_FETCH_START = 'NOTE_FETCH_START';
export const NOTE_FETCH_SUCCESS = 'NOTE_FETCH_SUCCESS';
export const NOTE_FETCH_FAILURE = 'NOTE_FETCH_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

// STRETCH
export const getNotes = () => dispatch => {
    dispatch({type: NOTE_FETCH_START});
    const promise = axios.get('https://killer-notes.herokuapp.com/note/get/all');

    promise
        .then(response => {
            dispatch({type: NOTE_FETCH_SUCCESS, payload: response.data});
        })
        .catch(err => {
            dispatch({ type: NOTE_FETCH_FAILURE, payload: err });
        });
}


export const addNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
        .then(response => {
            dispatch({ type: ADD_NOTE_SUCCESS, payload: response.data});
        }).catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        });

}

export const deleteNote = _id => {
    return {
        type: DELETE_NOTE,
        _id
    }
}

export const setUpdateNote = title => {
    return {
        type: SET_UPDATE_NOTE,
        payload: title,
    };
}

export const updateNote = note => {
    return {
        type: UPDATE_NOTE,
        payload: note
    }
}