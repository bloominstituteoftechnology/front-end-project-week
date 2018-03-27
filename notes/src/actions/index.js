import axios from 'axios';

export const 
    FETCHING    =   'FETCHING',
    FETCHED     =   'FETCHED',
    ERROR       =   'ERROR',
    ADDING      =   'ADDING',
    ADDED       =   'ADDED';

export const getNotes = () => dispatch  => {
    dispatch({
        type: FETCHING,
        msg: 'Fetching notes...'
    });

    axios
        .get(`http://localhost:5000/notes`)
        .then(response=> {
            dispatch({
                type: FETCHED,
                notes: response.data, 
            })
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                errorMessage: `Could not retrieve notes! ${err}.`
            })
        });
};

export const addNote = (newNote) => dispatch => {
    dispatch({ type: ADDING });

    axios
        .post(`http://localhost:5000/notes`, newNote)
        .then(response => {
            dispatch({
                type: ADDED,
                notes: response.data,
            })
        })
        .catch(err => { 
            dispatch({
                type: ERROR,
                errorMessage: `Could not add note ${err}.`
            })
        });
}