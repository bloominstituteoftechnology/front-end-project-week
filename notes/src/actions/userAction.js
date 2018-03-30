import axios from 'axios';

export const 
    ROOT_URL            =   `http://localhost:5000/users`,
    FETCHING_USER       =   'FETCHING_USER',
    USER_FETCHED        =   'USER_FETCHED',
    ADDING_USER         =   'ADDING_USER',
    USER_ADDED          =   'USER_ADDED',
    UPDATING_USER       =   'UPDATING_USER',
    USER_UPDATED        =   'USER_UPDATED',
    DELETING_USER       =   'DELETING_USER',
    USER_DELETED        =   'USER_DELETED',
    FETCHING_USER_ERROR =   'FETCHING_USER_ERROR',
    ADDING_USER_ERROR   =   'ADDING_USER_ERROR',
    UPDATING_USER_ERROR =   'DELETING_USER_ERROR',
    DELETING_USER_ERROR =   'DELETING_NOTE_ERROR';

export const getUser = id => dispatch  => {
    const url = `${ROOT_URL}/${id}`;

    dispatch({
        type: FETCHING_USER,
        msg: 'Fetching a user...'
    });

    axios
        .get(url)
        .then(response=>{
            dispatch({
                type: USER_FETCHED,
                note: response.data, 
            });
        })
        .catch(err => {
            dispatch({
                type: FETCHING_USER_ERROR,
                errorMessage: `Could not retrieve the user! ${err}.`
            })
        });
};

export const addUser = (newNote) => dispatch => {
    const url = ROOT_URL; 
    dispatch({type: ADDING_USER});
    axios
        .post(url, newNote)
        .then(response => {
            dispatch({
                type: USER_ADDED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: ADDING_USER_ERROR,
                errorMessage: `Could not add user! ${err}.`
            })
        });
}

export const updateUser = (id, updatedNnote) => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({type: UPDATING_USER});

    axios
        .put(url, updatedNnote)
        .then(response => {
            dispatch({
                type: USER_UPDATED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: UPDATING_USER_ERROR,
                errorMessage: `Could not edit user! ${err}.`
            })
        });
}

export const deleteUser = id => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({ type: DELETING_USER });

    axios
        .delete(url)
        .then(response => {
            dispatch({
                type: USER_DELETED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: DELETING_USER_ERROR,
                errorMessage: `Could not delete user! ${err}.`
            })
        });
};