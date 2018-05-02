import axios from 'axios';

export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';

// axios.get config

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: LOADING });
        axios
            .get('http://localhost:5000/homeNotes')
            .then(response => dispatch({ type: SUCCESS, notes: response.data }))
    }
}