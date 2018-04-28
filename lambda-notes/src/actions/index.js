import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';

export const getNotes = () => dispatch => {
    dispatch({ type: FETCHING});

    axios
        .get('https://quiet-brushlands-69280.herokuapp.com/api/notes')
        .then(res => {
            dispatch({ type: FETCHED, notes: res.data });
        })
        .catch(error => {
            dispatch({ type: ERROR, errorMessage: 'Error fetching the data'});
        });
}