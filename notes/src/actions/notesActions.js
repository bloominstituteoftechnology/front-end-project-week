import axios from 'axios';

export const 
    ROOT_URL            =   `http://localhost:5000/notes`,
    FETCHING_NOTE       =   'FETCHING_NOTE',
    NOTE_FETCHED        =   'NOTE_FETCHED',
    ADDING_NOTE         =   'ADDING_NOTE',
    NOTE_ADDED          =   'NOTE_ADDED',
    UPDATING_NOTE       =   'UPDATING_NOTE',
    NOTE_UPDATED        =   'NOTE_UPDATED',
    DELETING_NOTE       =   'DELETING_NOTE',
    NOTE_DELETED        =   'NOTE_DELETED',
    FETCHING_NOTE_ERROR =   'FETCHING_NOTE_ERROR',
    ADDING_NOTE_ERROR   =   'ADDING_NOTE_ERROR',
    UPDATING_NOTE_ERROR =   'UPDATING_NOTE_ERROR',
    DELETING_NOTE_ERROR =   'DELETING_NOTE_ERROR',
    FETCHING_NOTES      =   'FETCHING_NOTES',
    NOTES_FETCHED       =   'NOTES_FETCHED',
    FETCHING_NOTES_ERROR=   'FETCHING_NOTES_ERROR';
    

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
                type: FETCHING_NOTES_ERROR,
                errorMessage: `Could not retrieve notes! ${err}.`
            })
        });
};

export const getNote = id => dispatch  => {
    const url = `${ROOT_URL}/${id}`;

    dispatch({
        type: FETCHING_NOTE,
        msg: 'Fetching a note...'
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
                type: FETCHING_NOTE_ERROR,
                errorMessage: `Could not retrieve the note! ${err}.`
            })
        });
};

export const addNote = (newNote) => dispatch => {
    const url = ROOT_URL; 
    console.log(newNote);
    dispatch({type: ADDING_NOTE});
    axios
        .post(url, newNote)
        .then(response => {
            dispatch({
                type: NOTE_ADDED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: ADDING_NOTE_ERROR,
                errorMessage: `Could not add the note! ${err}.`
            })
        });
}

export const updateNote = (id, updatedNnote) => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({type: UPDATING_NOTE});

    axios
        .put(url, updatedNnote)
        .then(response => {
            dispatch({
                type: NOTE_UPDATED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: UPDATING_NOTE_ERROR,
                errorMessage: `Could not edit note! ${err}.`
            })
        });
}

export const deleteNote = id => dispatch => {
    const url = `${ROOT_URL}/${id}`; 
    dispatch({ type: DELETING_NOTE });

    axios
        .delete(url)
        .then(response => {
            dispatch({
                type: NOTE_DELETED,
                notes: response.data,
            })
        })
        .catch(err =>{
            dispatch({
                type: DELETING_NOTE_ERROR,
                errorMessage: `Could not delete note! ${err}.`
            })
        });
};

