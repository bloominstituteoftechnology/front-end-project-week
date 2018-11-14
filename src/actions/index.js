import axios from 'axios';

export const LOADING = "LOADING";
export const ERROR_MESSAGE = "ERROR_MESSAGE";
export const GET_NOTES = "GET_NOTES";
export const GET_NOTE = "GET_NOTE";

export const getNotes () => {
    return(dispatch) => {
        dispatch({type: LOADING})
        axios.get('')
    }
}