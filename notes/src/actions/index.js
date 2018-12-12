import axios from 'axios'

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';

export const ERROR = 'ERROR'

export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';

export const GOT_NOTE = 'GOT_NOTE';
export const GET_NOTE = 'GET_NOTE';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';

export const DELETED_NOTE = 'DELETED_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE'

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

export const getNote = id =>{
    return dispatch => {
        dispatch({type: GET_NOTE })
        axios.get(`https://fe-notes.herokuapp.com/note/get/${id}`)
            .then(res => {
                dispatch({type: GOT_NOTE, payload: res.data})
            })
            .catch(err =>{
                dispatch({type: ERROR, payload: 'could not get note'})
            })
    }
}
export const editNote = (id,obj) => {
    return dispatch => {
        dispatch({ type: UPDATING_NOTE })
        axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`,obj)
            .then(res => {
                dispatch({ type: UPDATED_NOTE, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'could not update note' })
            })
    }
}

export const deleteNote = id => {
    return dispatch => {
        dispatch({ type: DELETING_NOTE })
        axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
            .then(res => {
                dispatch({ type: DELETED_NOTE, payload: res.data})
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: 'could not get note' })
            })
    }
}