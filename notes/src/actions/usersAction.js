import axios from 'axios';

export const 
    ROOT_URL                =   `http://localhost:5000/users`,
    FETCHING_USERS          =   'FETCHING_USERS',
    USERS_FETCHED           =   'USERS_FETCHED',
    FETCHING_USERS_ERROR    =   'FETCHING_USERS_ERROR';
    

export const getUsers = () => dispatch  => {
    const url = ROOT_URL;
    dispatch({
        type: FETCHING_USERS,
        msg: 'Fetching users...'
    });

    axios
        .get(url)
        .then(response=>{
            dispatch({
                type: USERS_FETCHED,
                notes: response.data, 
            });
        })
        .catch(err => {
            dispatch({
                type: FETCHING_USERS_ERROR,
                errorMessage: `Could not retrieve users! ${err}.`
            })
        });
};

