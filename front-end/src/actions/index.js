import axios from "axios"

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const FETCHING = "FETCHING";
export const ADDING = "ADDING";

export const getNotes = () => dispatch => {
    dispatch({ type: FETCHING, loading: true });

    axios
        .get(`http://localhost:3333/smurfs`)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data, loading: false });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err, loading: false});
        });
};

export const postNote = note => dispatch => {
    dispatch({ type: ADDING, adding: true });

    axios
        .post(`http://localhost:3333/smurfs`, note)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data, adding: false });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err, adding: false});
        });
};