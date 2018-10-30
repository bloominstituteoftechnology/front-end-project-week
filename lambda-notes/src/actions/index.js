import axios from 'axios'

export const GET_NOTES = 'GET_NOTES'
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS'
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR'

export const ADD_NOTE = 'ADD_NOTE'
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS'
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR'

export const DELETE_NOTE = 'DELETE_NOTE'
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS'
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR'

export const UDPATE_NOTE = 'UPDATE_NOTE'
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS'
export const UPDATE_NOTE_ERROR = 'UPDATE_NOTE_ERROR'

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: GET_NOTES })
        axios
            .get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => {
                dispatch({ type: GET_NOTES_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_NOTES_ERROR })
            })
    }
}
