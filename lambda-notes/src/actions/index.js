import { testNotes } from "../data";
import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES'
export const FETCHED_NOTES = 'FETCHED_NOTES'
export const ADDING_NOTES = 'ADDING_NOTES'
export const ADDED_NOTES = 'ADDED_NOTES'
export const DELETING_NOTES = 'DELETING_NOTES'
export const DELETED_NOTES = 'DELETED_NOTES'
export const UPDATING_NOTES = 'UPDATING_NOTES'
export const UPDATED_NOTES = 'UPDATED_NOTES'
export const ERROR = 'ERROR'

export const fetchNotes = () => {
    return dispatch => {
        dispatch({ type: FETCHING_NOTES })
        axios.get(`https://killer-notes.herokuapp.com/note/get/all`)
            .then(({ data }) => {
                dispatch({ type: FETCHED_NOTES, payload: data })
            })
            .catch(err => dispatch({ type: ERROR, err: err }))
    }
}

let idCount = 3
export const addNewNote = data => {
    return dispatch => {
        dispatch( {type: ADDING_NOTES })
        //Do the api calls here 
        axios.post(`https://killer-notes.herokuapp.com/note/create`, data)
            .then(res =>  dispatch( {type: ADDED_NOTES, payload: res.data.success}))
            .catch(err => console.log(err))
    }
}

export const deleteNote = noteId => {
    return dispatch => {
        dispatch( {type: DELETING_NOTES })
        axios.post(`https://killer-notes.herokuapp.com/note/delete/id`)
            .then(res => dispatch( { type: DELETED_NOTES}))
            .catch(err => dispatch( {type: ERROR} ))
    }
}

export const updateNotes = data => {
    return dispatch => {
        dispatch( {type: UPDATING_NOTES } )
        //Do the updated
        axios.put(`https://killer-notes.herokuapp.com/note/edit/${data._id}`, data)
            .then(res => dispatch( { type: UPDATED_NOTES } ) )
            .catch(err => dispatch( { type: ERROR } ))
    }
}