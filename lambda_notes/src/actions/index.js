import axios from 'axios';

//Declare action type const
import * as types from './types';

export const fetchNotes = () => {
    const request = axios.get('https://killer-notes.herokuapp.com/note/get/all')
    return (dispatch) => {
        dispatch({type: types.FETCHING_NOTES})

        request.then(response => dispatch({
            type: types.NOTES_FETCHED,
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
    const fetchData = () => {
        axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(res => {
            return res.data
        })
        .catch(error => console.log(error))
    }

    return (dispatch) => {
        axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        // .then(window.location.reload())
        .then(response => {
            if (response.data.success === "Note successfully deleted") {
                dispatch({
                    type: types.DELETE_NOTE,
                    payload: fetchData()
                })
            }
        })
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}