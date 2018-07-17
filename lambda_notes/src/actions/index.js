import axios from 'axios';

//Declare action type const
export const FETCH_NOTES = 'FETCH_NOTES'
export const FETCH_SINGLE_NOTE = 'FETCH_SINGLE_NOTE'
export const FETCH_ERROR = 'FETCH_ERROR'

export const fetchNotes = () => {
    return (dispatch) => {
        axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => dispatch({
            type: FETCH_NOTES,
            payload: response.data
        }))
        .catch(err => dispatch({
            type:FETCH_ERROR,
            error: err
        }))
    }
}

export const fetchSingleNote = (id) => {
    return (dispatch) => {
        axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`)
        .then(response => dispatch({
            type: FETCH_SINGLE_NOTE,
            payload: response.data
        }))
    }
}
