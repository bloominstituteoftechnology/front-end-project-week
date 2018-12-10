import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';

export const ERROR = 'ERROR'

export const fetchNotes = note => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });

        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(res => {
                dispatch({
                    type: FETCHED_NOTES,
                    payload: res.data
                })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'error fetching notes..', })
            })
    }
}
