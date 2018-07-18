import axios from 'axios';
import Creators from './actions';
const updatingNote = Creators.updatingNote;
const updatedNote = Creators.updatedNote;

const updateNote = (id, noteObj) => {
    console.log(noteObj);
    const promise = axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, noteObj);
    return dispatch => {
        dispatch(updatingNote());
        promise
        .then(response => {
            console.log("updated response:",response);
            dispatch(updatedNote(response.data))
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default {
    updateNote
}