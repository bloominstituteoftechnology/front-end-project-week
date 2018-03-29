import axios from 'axios';

export const 
    ROOT_URL            =   `http://localhost:5000/notes`,
    FETCHING_NOTES      =   'FETCHING_NOTES',
    NOTES_FETCHED       =   'NOTES_FETCHED',
    FETCHING_NOTE       =   'FETCHING_NOTE',
    NOTE_FETCHED        =   'NOTE_FETCHED',
    ADDING              =   'ADDING',
    ADDED               =   'ADDED',
    UPDATING            =   'UPDATING',
    UPDATED             =   'UPDATED',
    DELETING            =   'DELETING',
    DELETED             =   'DELETED',
    ERROR               =   'ERROR';
    

export const getNotes = () => dispatch  => {
    const url = ROOT_URL;
    dispatch({
        type: FETCHING_NOTES,
        msg: 'Fetching notes...'
    });

    axios
        .get(url)
        .then(response=>{
            dispatch({
                type: NOTES_FETCHED,
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

export const getNote = id => dispatch  => {
    const url = `${ROOT_URL}/${id}`;

    dispatch({
        type: FETCHING_NOTE,
        msg: 'Fetching note...'
    });

    axios
        .get(url)
        .then(response=>{
            dispatch({
                type: NOTE_FETCHED,
                note: response.data, 
            });
        })
        .catch(err => {
            dispatch({
                type: ERROR,
                errorMessage: `Could not retrieve the note! ${err}.`
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

export const editNote = (id, updatedNnote) => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({type: UPDATING});

    axios
        .put(url, updatedNnote)
        .then(response => {
            dispatch({
                type: UPDATED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: ERROR,
                errorMessage: `Could not edit note! ${err}.`
            })
        });
}

export const deleteNote = id => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({ type: DELETING });

    axios
        .delete(url)
        .then(response => {
            dispatch({
                type: DELETED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: ERROR,
                errorMessage: `Could not delete note! ${err}.`
            })
        });
};