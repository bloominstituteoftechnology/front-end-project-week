import axios from 'axios';
// Our actions are FETCHING FETCHED ERROR UPDATING DELETING ADDING
export const FETCHING = "FETCHING";
export const FETCHED = "FETCHED";
export const ERROR = "ERROR";
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";
export const ADDING = "ADDING";

export const getNotes = (URL) => {
    const request = axios.get(URL);
    return(dispatch) => {
        dispatch({
            type: FETCHING,
        })
        request.then(response => {
            console.log(response);
            dispatch({type: FETCHED, payload: response.data.results})
        })
        .catch(err => {
            dispatch({type: ERROR, error: err.message})
        })
    }
}

