import axios from "axios";

export const NOTES_FETCHING = "NOTES_FETCHING",
    NOTES_FETCHED = "NOTES_FETCHED",
    NOTES_ADDING = "NOTES_ADDING",
    NOTES_ADDED = "NOTES_ADDED",
    NOTES_DELETING = "NOTES_DELETING",
    NOTES_DELETED = "NOTES_DELETED",
    NOTES_UPDATING = "NOTES_UPDATING",
    NOTES_UPDATED = "NOTES_UPDATED",
    NOTES_ERROR = "NOTES_ERROR",
    URL = "https://lambdabackendproject.herokuapp.com/api/users",
    TEST_URL = "http://localhost:5000/api";

const token = localStorage.getItem("token");

const requestOptions = {
    Authorization: token,
};

export const getNotes = userId => dispatch => {
    dispatch({
        type: NOTES_FETCHING,
        msg: "Fetching notes...",
    });

    axios
        .get(`${URL}/${userId}/notes`, { headers: requestOptions })
        .then(response => {
            console.log(response);
            dispatch({
                type: NOTES_FETCHED,
                notes: response.data.notes,
            });
        })
        .catch(err => {
            dispatch({
                type: NOTES_ERROR,
                errorMessage: `Could not retrieve notes! ${err}.`,
            });
        });
};

export const addNote = (userId, newNote) => dispatch => {
    dispatch({ type: NOTES_ADDING });

    axios
        .post(`${URL}/${userId}/notes`, newNote, { headers: requestOptions })
        .then(response => {
            dispatch({
                type: NOTES_ADDED,
                notes: response.data.notes,
            });
        })
        .catch(err => {
            dispatch({
                type: NOTES_ERROR,
                errorMessage: `Could not add note ${err}.`,
            });
        });
};

export const deleteNote = (userId, noteId) => dispatch => {
    dispatch({ type: NOTES_DELETING });

    axios
        .delete(`${URL}/${userId}/notes/${noteId}`, { headers: requestOptions })
        .then(response => {
            dispatch({
                type: NOTES_DELETED,
                notes: response.data,
            });
        })
        .catch(err => {
            dispatch({
                type: NOTES_ERROR,
                errorMessage: `Could not delete note ${err}.`,
            });
        });
};

export const editNote = (userId, noteId, note) => dispatch => {
    dispatch({ type: NOTES_UPDATING });

    axios
        .put(`${URL}/${userId}/notes/${noteId}`, note, { headers: requestOptions })
        .then(response => {
            dispatch({
                type: NOTES_UPDATED,
                notes: response.data.notes,
            });
        })
        .catch(err => {
            dispatch({
                type: NOTES_ERROR,
                errorMessage: `Could not edit the note ${err}.`,
            });
        });
};
