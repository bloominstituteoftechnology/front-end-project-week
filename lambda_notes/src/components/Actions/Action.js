import {axios} from 'axios';



// export const LOADING = 'LOADING';
// export const SUCCESS = 'SUCCESS';
// export const ERROR = 'ERROR';

export const getNotes = () => {
    return (dispatch) => {
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then( response => {
            dispatch({notes: response.data})
        })
        .catch( err => {
            throw new Error(err)
        })
    }
}