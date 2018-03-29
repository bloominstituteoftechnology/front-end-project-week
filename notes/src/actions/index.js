import axios from 'axios';

export const 
    FETCHING    =   'FETCHING',
    FETCHED     =   'FETCHED',
    ADDING      =   'ADDING',
    ADDED       =   'ADDED',
    DELETING    =   'DELETING',
    DELETED     =   'DELETED',
    UPDATING    =   'UPDATING',
    UPDATED     =   'UPDATED',
    ERROR       =   'ERROR';
    

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

export const addNote = newNote => dispatch => {
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
};

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETING });

    axios
        .delete(`http://localhost:5000/notes/${id}`)
        .then(response => {
            dispatch({
                type: DELETED,
                notes: response.data
            })
        })
        .catch(err => { 
            dispatch({
                type: ERROR,
                errorMessage: `Could not delete note ${err}.`
            })
        });
}

export const editNote = (id, note) => dispatch => {
    dispatch({ type: UPDATING });

    axios
        .put(`http://localhost:5000/notes/${id}`, note) 
        .then(response => { console.log('action', response)
            dispatch({
                type: UPDATED,
                notes: response.data,
            })
        })
        .catch(err => { 
            dispatch({
                type: ERROR,
                errorMessage: `Could not edit the note ${err}.`
            })
        });
}