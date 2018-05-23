import axios from 'axios';
export const FETCHING = 'FETCHING';
export const RECIEVED = 'RECIEVED';
export const ERROR = 'ERROR';

export const fetchNotes = () => {
    const getNotes = axios.get('https://killer-notes.herokuapp.com/note/get/all');
    return dispatch => {
        dispatch({ type: FETCHING });
        getNotes
            .then(serverData => {
                console.log("Server Data:", serverData);
                dispatch({
                    type: RECIEVED,
                    payload: serverData.data
                })
            })
            .catch(err => {
                console.log("ERROR", err);
                dispatch({
                    type: ERROR,
                    payload: err
                })
            })
    }
}