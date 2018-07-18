import axios from 'axios';
export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const FETCHED_ONE = 'FETCHED_ONE';
export const SAVING = 'SAVING';
export const SAVED = 'SAVED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const ERROR = 'ERROR';

const URL = 'https://killer-notes.herokuapp.com/note';

export const fetchReq = () => {
    return (dispatch) => {
        dispatch({type: FETCHING});
        axios.get(`${URL}/get/all`)
        .then(({data}) => {
            // console.log(data);
            dispatch({type: FETCHED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const fetchNoteReq = (id) => {
    return (dispatch) => {
        dispatch({type: FETCHING});
        axios.get(`${URL}/get/${id}`)
        .then(({data}) => {
            // console.log(data);
            dispatch({type: FETCHED_ONE, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const submitReq = (note) => {
    return (dispatch) => {
        dispatch({type: SAVING});
        axios.post(`${URL}/create`, note)
        .then(({data}) => {
            dispatch({type: SAVED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const deleteReq = (id) => {
    return (dispatch) => {
        dispatch({type: DELETING});
        axios.delete(`${URL}/delete/${id}`)
        .then(({data}) => {
            dispatch({type: DELETED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};

export const updateReq = (id, note) => {
    return (dispatch) => {
        dispatch({type: UPDATING});
        axios.put(`${URL}/edit/${id}`, note)
        .then(({data}) => {
            dispatch({type: UPDATED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};
