import axios from 'axios';
export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';
export const GET_NOTE = 'GET_NOTE';
export const GETTING_NOTE = 'GETTING_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDITTING_NOTE = 'EDITTING_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const ERROR = 'ERROR';


export const getNotes = () => dispatch => {
    dispatch({type: GETTING_NOTES});
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then( res => {
        console.log(res);
        dispatch({type: GET_NOTES, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type:ERROR, payload: err})
    })
}


export const addNote = note => dispatch => {
    dispatch({type: ADDING_NOTE});
    axios
    .post('https://killer-notes.herokuapp.com/note/create',note)
    .then(res => {
        dispatch({type: ADD_NOTE})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: err});
    })
}

export const getNote = noteID => (dispatch) => {
    dispatch({type: GETTING_NOTE});
    axios.get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
    .then(res => {
        console.log(res)
        dispatch({type: GET_NOTE, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: err});
    })
}

export const editNote = (noteID , note) => dispatch => {
    dispatch({type: EDITTING_NOTE});
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${noteID}`,note)
    .then(res => {
        dispatch({type: EDIT_NOTE, payload: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: err});
    })
}

export const deleteNote = noteID => dispatch => {
    dispatch({type: DELETING_NOTE});
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
    .then(res => {
        dispatch({type: DELETE_NOTE})
    })
    .catch(err => {
        console.log(err)
        dispatch({type: ERROR, payload: err});
    })
}