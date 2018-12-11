import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';

export const ERROR = 'ERROR'

export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';

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


export const addNotes = note =>{
    return dispatch => {
        dispatch({ type: ADDING_NOTE });

        axios.post(`https://fe-notes.herokuapp.com/note/create`, note)
            .then(res => {
                console.log(res.data)
                dispatch({
                    type: ADDED_NOTE,
                })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'error fetching notes..', })
            })
    }
}