import axios from 'axios';

export const ERROR = 'ERROR';
export const LOADING = 'LOADING';
export const GET_NOTES = 'GET_NOTES';

export const getNotes = () => {
    return dispatch => {
        dispatch({type: LOADING});
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(res => {
                dispatch({type: GET_NOTES, notes: res.data});
            })
            .catch(err => {
                dispatch({type: ERROR, errorMessage: 'Trouble retreiving notes'});
            })
    }
};