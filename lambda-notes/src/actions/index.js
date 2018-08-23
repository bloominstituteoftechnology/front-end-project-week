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

// const URL = 'https://killer-notes.herokuapp.com/note';
// const URL = 'http://localhost:8000/notes';
const URL = 'https://immense-beach-63523.herokuapp.com/notes';

export const fetchReq = () => {
    return (dispatch) => {
        dispatch({type: FETCHING});
        // axios.get(`${URL}/get/all`)
        axios.get(`${URL}`)
        .then(({data}) => {
            console.log(data);
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
        // axios.get(`${URL}/get/${id}`)
        axios.get(`${URL}/${id}`)
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
        // axios.post(`${URL}/create`, note)
        axios.post(`${URL}`, note)
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
        // axios.delete(`${URL}/delete/${id}`)
        axios.delete(`${URL}/${id}`)
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
        // axios.put(`${URL}/edit/${id}`, note)
        axios.put(`${URL}/${id}`, note)
        .then(({data}) => {
            dispatch({type: UPDATED, payload: data});
        })
        .catch((err) => {
            dispatch({type: ERROR, payload: err})
        });
    };
};
