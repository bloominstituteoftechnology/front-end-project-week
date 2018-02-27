import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTES = 'ADD_NOTES';
export const FETCHING = 'FETCHING';
export const ERROR_GETTING_NOTES = 'ERROR_GETTING_NOTES';
export const SET_SINGLE_NOTE = 'SET_SINGLE_NOTE';

export const getNotes = () => {
    const notes = axios.get('http://localhost:3333/notes/');
    return dispatch => {
        dispatch({type: FETCHING, fetching: true});
        notes
            .then(response => {
                console.log('response.data',response.data)
                dispatch({type: GET_NOTES, payload: response.data});
                dispatch({type: FETCHING, fetching: false});
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};

export const addNote = (note) => {

    const newNote = axios.post('http://localhost:3333/notes', {
        title:note.title,
        description:note.description,
        tags:note.tags,
    });

    return dispatch => {
        newNote
            .then(({data}) => {
                dispatch({type: ADD_NOTES, payload: data});
                window.location = "/";
            })
            .catch(err => {
                dispatch({type: ERROR_GETTING_NOTES, payload: err});
            });
    };
};

export const getSingleNote = (note) => {
    return dispatch => {
        dispatch({type: SET_SINGLE_NOTE, payload: note});
    };
};




