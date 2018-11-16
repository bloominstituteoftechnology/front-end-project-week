import axios from "axios"

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const VIEW = "VIEW";
export const WORKING = "WORKING";

export const getNotes = () => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .get(`https://fe-notes.herokuapp.com/note/get/all`)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const getNote = id => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
        .then(({ data }) => {
            dispatch({ type: VIEW, note: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const createNote = note => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .post(`https://fe-notes.herokuapp.com/note/create`, note)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const editNote = (id, note) => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
        .then(({ data }) => {
            dispatch({ type: VIEW, note: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const deleteNote = id => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        .then(() => getNotes()(dispatch))
        .catch(err => dispatch({ type: FAILURE, error: err }));
};