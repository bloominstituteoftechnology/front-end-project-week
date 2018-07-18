import axios from 'axios';
import Creators from './actions';

const requestNote = Creators.requestNote;
const receiveNote = Creators.receiveNote;
const fetchNote = (id) => {
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    return dispatch => {
        dispatch(requestNote());
        promise
        .then(response => {
            dispatch(receiveNote(response.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}


export default {
    fetchNote
}