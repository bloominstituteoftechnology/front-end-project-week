import axios from 'axios';
export const GETTING_DATA = 'GETTING_DATA';
export const DATA_SUCCESS = 'DATA_SUCCESS';
export const GET_NOTE = 'GET_NOTE';
export const GET_NOTE_SUCCESS = 'GET_NOTE_SUCCESS';
export const ADDING_NOTE = 'ADDING_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDIT_NOTE_SUCCESS = 'EDIT_NOTE_SUCCESS';
export const DELETE_NOTE = 'DELETE_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const ERROR = 'ERROR';


export const getNotes = () => dispatch => {
    dispatch({type: GETTING_DATA});
    axios
    .get('https://killer-notes.herokuapp.com/note/get/all')
    .then( res => {
        dispatch({type: DATA_SUCCESS, results: res.data})
    })
    .catch(err => {
        console.log(err)
        dispatch({type:ERROR, error: err})
    })
}


export const addNote = note => dispatch => {
    dispatch({type: ADDING_NOTE});
    axios
    .post('https://killer-notes.herokuapp.com/note/create',note)
    .then(res => {
        dispatch({type: ADDED_NOTE})
    })
    .catch(err => {
        console.log(err)
    })
}

export const getNote = _id => (dispatch) => {
    dispatch({type: GET_NOTE});
    axios.get(`https://killer-notes.herokuapp.com/note/get/${noteID}`)
    .then(res => {
        console.log(res)
        dispatch({type: GET_NOTE_SUCCESS, result: res.data})
    })
}

export const editNote = (_id , note) => dispatch => {
    dispatch({type: EDIT_NOTE});
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${noteID}`,note)
    .then(res => {
        dispatch({type: EDIT_NOTE_SUCCESS, result: res.data})
    })
}

export const deleteNote = _id => dispatch => {
    dispatch({type: DELETE_NOTE});
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${noteID}`)
    .then(res => {
        dispatch({type: NOTE_DELETED})
    })
}