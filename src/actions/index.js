import axios from 'axios';
import shortid from 'shortid';
axios.defaults.withCredentials = true;

// const URL = 'http://localhost:5000';
const URL = 'https://safe-journey-95480.herokuapp.com';

export const addNote = (info, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .post(`${URL}/notes/new`, info)
            .then(response => {
                dispatch({ type: 'NOTE_ADDED', payload: response.data });
                history.push('/');
            })
            .catch(err => {
                dispatch({ type: 'ERROR_ADDING_NOTE', payload: err });
            });
    };
};

export const editNote = (title, entry, id, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .put(`${URL}/notes/edit/${id}`, { title, entry })
            .then(response => {
                history.push('/');
                dispatch({ type: 'NOTE_EDITED', payload: response.data });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_EDITING_NOTE', payload: err });
            });
    };
};

export const viewNote = info => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .get(`${URL}/notes/${info._id}`)
            .then(response => {
                dispatch({ type: 'VIEW_NOTE', payload: response.data });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_VIEWING_NOTE', payload: err });
            });
    };
};

export const deleteNote = info => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .post(`${URL}/notes/remove/${info}`)
            .then(response => {
                dispatch({ type: 'DELETED_NOTE', payload: response.data });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_DELETING_NOTE', payload: err });
            });
    };
};

export const reorderNotes = (newNotes, searching) => {
    return {
        type: 'REORDER_NOTES',
        payload: newNotes,
        searching: searching,
    };
};

export const sortNotes = (sortedNotes, direction, searching) => {
    return {
        type: 'SORT_NOTES',
        payload: sortedNotes,
        direction: direction,
        searching: searching,
        hash: shortid.generate(),
    };
};

export const searchNotes = terms => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .get(`${URL}/notes/search/${terms}`)
            .then(results => {
                dispatch({ type: 'SEARCH_NOTES', payload: results.data, searchTerms: terms });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_SEARCHING_NOTES', payload: err });
            });
    };
};

export const changeNoteLabel = (newLabel, note) => {
    return dispatch => {
        axios
            .put(`${URL}/notes/changeLabel/${note._id}`, { ...note, label: newLabel })
            .then(result => {
                dispatch({ type: 'CHANGE_NOTE_LABEL', payload: result.data.label, id: result.data._id });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_CHANGING_LABEL', payload: err });
            });
    };
};

export const getNotes = () => {
    return dispatch => {
        dispatch({ type: 'LOADING_NOTES' });
        axios
            .get(`${URL}/notes/`)
            .then(response => {
                dispatch({ type: 'GOT_NOTES', payload: response.data });
            })
            .catch(err => {
                dispatch({ type: 'ERROR_GETTING_NOTES', payload: err });
            });
    };
};

export const login = (username, password, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        axios
            .post(`${URL}/users/login`, { username, password })
            .then(response => {
                history.push('/login');
                dispatch({
                    type: 'USER_AUTHENTICATED',
                    payload: response.data,
                });
            })
            .catch(err => {
                dispatch({ type: 'AUTHENTICATION_ERROR', payload: err });
            });
    };
};

export const logout = () => {
    return dispatch => {
        axios.post(`${URL}/users/logout`)
            .then(response => {
                dispatch({
                    type: 'USER_UNAUTHENTICATED'
                });
                dispatch({
                    type: 'FLUSH_NOTES'
                });
            })
            .catch(err => {
                dispatch({ type: 'AUTHENTICATION_ERROR', payload: err });
            });
    };
};

export const register = (username, password, history) => {
    return dispatch => {
        dispatch({ type: 'LOADING' });
        axios.post(`${URL}/users/register`, { username, password })
            .then(response => {
                history.push('/login');
                dispatch({
                    type: 'USER_REGISTERED',
                });
            })
            .catch(err => {
                dispatch({ type: 'AUTHENTICATION_ERROR', payload: err });
            });
    };
};