import axios from "axios";

export const FETCHING_NOTES_START = "FETCHING_NOTES_START";
export const FETCHING_NOTES_SUCCESS = "FETCHING_NOTES_SUCCESS";
export const FETCHING_NOTES_FAILURE = "FETCHING_NOTES_FAILURE";


export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES_START});
    axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
            console.log(response);
            dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data })
        })
        .catch(error => {
            dispatch({ type: FETCHING_NOTES_FAILURE, payload: error })
        })
}

