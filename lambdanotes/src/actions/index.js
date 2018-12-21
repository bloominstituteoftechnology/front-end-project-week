import axios from 'axios';
//Action identifiers
export const GET_NOTES = 'GET_NOTES';
//Server url variable
const target ='https://fe-notes.herokuapp.com/note';

//Action creator functions
export const getNotes = () => dispatch => {
    axios
        .get(`${target}/get/all`)
        .then(res => {
            dispatch({type: GET_NOTES, payload:res.data})
        });
};