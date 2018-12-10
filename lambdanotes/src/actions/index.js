import axios from "axios";

export const FETCHING_NOTES = "FETCHING_NOTES";
export const UPDATING_NOTES = "UPDATING_NOTES";
export const DELETING_NOTE = "DELETING_NOTE";
export const ADDING_NOTE = "ADDING_NOTE";
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";

export const getNotes = () => {
    const promise = axios.get("http://localhost:5000/notes");
    return dispatch => {
        dispatch({ type: FETCHING_NOTES });
        promise
            .then(response => {
                console.log("response", response);
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            });
    };
};

export const addNote = note => {
    const promise = axios.post("http://localhost:5000/notes", note);
    return dispatch => {
        dispatch({ type: ADDING_NOTE });
        promise
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            });
    };
};

export const updateNote = note => {
    const promise = axios.put(`http://localhost:5000/notes/${note.id}`, note);
    return dispatch => {
        dispatch({ type: UPDATING_NOTES });
        promise
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            });
    };
};

export const deleteNote = noteID => {
    const promise = axios.delete(`http://localhost:5000/notes/${noteID}`);
    return dispatch => {
        dispatch({ type: DELETING_NOTE });
        promise
            .then(response => {
                dispatch({
                    type: SUCCESS,
                    payload: response.data
                });
            })
            .catch(err => {
                dispatch({
                    type: ERROR,
                    payload: err
                });
            });
    };
};
