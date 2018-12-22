import axios from 'axios';
//Action identifiers
export const GET_NOTES = 'GET_NOTES';
export const CREATE_NOTE = 'CREATE_NOTE';
//Server url variable
const target ='https://fe-notes.herokuapp.com/note';
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
            dispatch({ type: CREATE_NOTE, payload: res.data })
        })
}