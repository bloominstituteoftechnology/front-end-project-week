import axios from 'axios';

export const 
    ROOT_URL    =   `http://localhost:5000/notes`,
    FETCHING    =   'FETCHING',
    FETCHED     =   'FETCHED',
    ERROR       =   'ERROR',
    ADDING      =   'ADDING',
    ADDED       =   'ADDED';

export const getNotes = () => dispatch  => {
    const url = ROOT_URL;
    dispatch({
        type: FETCHING,
        msg: 'Fetching notes...'
    });

    axios
        .get(url)
        .then(response=>{
            dispatch({
                type: FETCHED,
                notes: response.data, 
            });
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                errorMessage: `Could not retrieve notes! ${err}.`
            })
        });
};

export const addNote = (newNote) => dispatch => {
    const url = ROOT_URL; 
    dispatch({type: ADDING});

    axios
        .post(url, newNote)
        .then(response => {
            dispatch({
                type: ADDED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: ERROR,
                errorMessage: `Could not retrieve notes! ${err}.`
            })
        });
}