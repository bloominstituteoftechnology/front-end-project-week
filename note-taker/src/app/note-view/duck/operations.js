import axios from 'axios';
import Creators from './actions';

const requestNote = Creators.requestNote;
const receiveNote = Creators.receiveNote;
const fetchNote = (id) => {
    console.log(id);
    const promise = axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    console.log('Single Note promise:');
    console.log(promise);
    return dispatch => {
        dispatch(requestNote());
        promise
        .then(response => {
            dispatch(receiveNote(response.data));
        })
    }
}


export default {
    fetchNote
}