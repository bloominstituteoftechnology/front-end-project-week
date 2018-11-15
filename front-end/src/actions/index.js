import axios from "axios"

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const FETCHING = "FETCHING";
export const ADDING = "ADDING";

export const getNotes = () => dispatch => {
    dispatch({ type: FETCHING });

    axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const createNote = note => dispatch => {
    dispatch({ type: ADDING });

    axios
        .post(`https://fe-notes.herokuapp.com/note/create`, note)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};