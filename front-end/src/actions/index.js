import axios from "axios";

export const FAILURE = "FAILURE";
export const SUCCESS = "SUCCESS";
export const VIEW = "VIEW";
export const WORKING = "WORKING";

export const getNotes = (filterSort = {}) => dispatch => {
    const { filter, sort } = filterSort;

    dispatch({ type: WORKING });

    return axios
        .get(`http://localhost:8080/notes/get`)
        .then(({ data }) => {
            console.log(data);
            data = data.reverse();

            if (sort) {
                data.sort((a, b) => (a[sort].toLowerCase() > b[sort].toLowerCase()) ? 1 : ((b[sort].toLowerCase() > a[sort].toLowerCase()) ? -1 : 0));
            }

            if (filter) {
                data = data.filter(d => d.title.toLowerCase().includes(filter) || d.textBody.toLowerCase().includes(filter));
            }

            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const getNote = id => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .get(`http://localhost:8080/notes/get/${id}`)
        .then(({ data }) => {
            dispatch({ type: VIEW, note: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const createNote = note => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .post(`http://localhost:8080/notes/create`, note)
        .then(({ data }) => {
            dispatch({ type: SUCCESS, notes: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const editNote = (id, note) => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .put(`http://localhost:8080/notes/update/${id}`, note)
        .then(({ data }) => {
            dispatch({ type: VIEW, note: data });
        })
        .catch(err => {
            dispatch({ type: FAILURE, error: err });
        });
};

export const deleteNote = id => dispatch => {
    dispatch({ type: WORKING });

    return axios
        .delete(`http://localhost:8080/notes/delete/${id}`)
        .then(() => getNotes()(dispatch))
        .catch(err => dispatch({ type: FAILURE, error: err }));
};