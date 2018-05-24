import axios from 'axios';
export const FETCHED = 'FETCHED';
export const FETCHING = 'FETCHING';
export const ERROR = 'ERROR';


export const fetchNotes = () => {
    const getNotes = axios.get('//killer-notes.herokuapp.com/note/get/all');
    return function(dispatch) {
        dispatch({ type: FETCHING });
        getNotes
            .then( response => {
                console.log('response', response)
                dispatch({ type: FETCHED, payload: response.data }
                );
            })
            .catch(err => {
                dispatch({ type: ERROR, payload: err });
            });
    }
}