import axios from 'axios';
// Our actions are FETCHING FETCHED ERROR UPDATING DELETING ADDING
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const FETCHINGNOTE = "FETCHINGNOTE";
export const FETCHEDNOTE = "FETCHEDNOTE";
export const ERROR = "ERROR";
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";
export const ADDING = "ADDING";

const url = "https://killer-notes.herokuapp.com/note/get/all";
const singleURL = "https://killer-notes.herokuapp.com/note/get/";

export const getNotes = () => {
    const request = axios.get(url);
    return(dispatch) => {
        dispatch({
            type: FETCHING,
        })
        request.then(response => {
            dispatch({type: FETCHED, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}

export const getNote = (id) => {
    const request = axios.get(`${singleURL}${id}`);
    return(dispatch) => {
        dispatch({
            type: FETCHINGNOTE,
        })
        request.then(response => {
            console.log("RESPONSE", response);
            dispatch({type: FETCHEDNOTE, payload: response.data})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}
