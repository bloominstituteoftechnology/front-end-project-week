import axios from 'axios';
import Creators from './actions';


const requestPost = Creators.requestPost;
const postCompleted = Creators.postCompleted;

const postNote = (noteObj) => {
    const promise = axios.post('https://killer-notes.herokuapp.com/note/create', noteObj);
    return dispatch => {
        dispatch(requestPost());
        promise
        .then(response => {
            console.log(response);
            dispatch(postCompleted(response.data));
        })
        .catch(err => {
            console.log(err);
        })
    }
}

export default {
    postNote
}