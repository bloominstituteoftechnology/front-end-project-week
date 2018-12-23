import axios from 'axios';
//Action identifiers
export const GET_NOTES = 'GET_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
//Server url variable
const target ='https://fe-notes.herokuapp.com/note';
const PUTtarget ='https://fe-notes.herokuapp.com/note/edit';
const DELtarget ='https://fe-notes.herokuapp.com/note/delete';
//Action creator functions

//retrieve notes
export const getNotes = () => dispatch => {
    axios
        .get(`${target}/get/all`)
        .then(res => {
            dispatch({type: GET_NOTES, payload:res.data})
        });
};

//add new note
export const createNote = note => dispatch => {
    axios
        .post(`${target}/create`, note)
        .then(res => {
            dispatch(getNotes())
        })
}

//edit existing note
export const editNote = note => dispatch => {
    axios
        .put(`${PUTtarget}/${note.id}`, note)
}

//delete existing note
export const deleteNote = note => dispatch => {
    axios
        .delete(`${DELtarget}/${note.id}`)
}