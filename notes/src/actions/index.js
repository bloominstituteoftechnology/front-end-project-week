import axios from 'axios';

export const 
    FETCHING    =   'FETCHING',
    FETCHED     =   'FETCHED',
    ERROR       =   'ERROR',
    ROOT_URL    =   `http://localhost:5000/notes`;

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