import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const GET_NOTE = 'GET_NOTE';

// axios.get config

export const getNote = (id) => {
    return {
        type: GET_NOTE,
        id: id,
    }
}

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/homeNotes')
            .then(response => dispatch({ type: SUCCESS, notes: response.data }))
    }
}