import axios from 'axios'

export const GET_NOTES = 'GET_NOTES'
export const GET_NOTES_SUCCESS = 'GET_NOTES_SUCCESS'
export const GET_NOTES_ERROR = 'GET_NOTES_ERROR'

export const GET_NOTE = 'GET_NOTE'
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS'
export const GET_NOTE_ERROR = 'GET_NOTE_ERROR'

export const ADD_NOTE = 'ADD_NOTE'
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS'
export const ADD_NOTE_ERROR = 'ADD_NOTE_ERROR'

export const DELETE_NOTE = 'DELETE_NOTE'
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS'
export const DELETE_NOTE_ERROR = 'DELETE_NOTE_ERROR'

export const UPDATE_NOTE = 'UPDATE_NOTE'
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
export const getNote = id => {
    return dispatch => {
        dispatch({ type: GET_NOTE })
        axios
            .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(res => {
                dispatch({ type: GET_NOTE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: GET_NOTE_ERROR })
            })
    }
}

export const addNote = note => {
    return dispatch => {
        dispatch({ type: ADD_NOTE })
        axios
            .post('https://fe-notes.herokuapp.com/note', note)
            .then(res => {
                dispatch({ type: ADD_NOTE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: ADD_NOTE_ERROR })
            })
    }
}

export const deleteNote = id => {
    return dispatch => {
        dispatch({ type: DELETE_NOTE })
        axios
            .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(res => {
                dispatch({ type: DELETE_NOTE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: DELETE_NOTE_ERROR })
            })
    }
}

export const updateNote = (id, note) => {
    return dispatch => {
        dispatch({ type: UPDATE_NOTE })
        axios
            .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
            .then(res => {
                dispatch({ type: UPDATE_NOTE_SUCCESS, payload: res.data })
            })
            .catch(err => {
                console.log(err)
                dispatch({ type: UPDATE_NOTE_ERROR })
            })
    }
}
