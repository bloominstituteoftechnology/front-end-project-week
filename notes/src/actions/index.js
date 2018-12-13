import axios from 'axios';

export const GETTING = 'GETTING';
export const GET = 'GET';
export const GETTING_NOTE = 'GETTING';
export const GET_NOTE = 'GET';
export const ADDING = 'ADDING';
export const ADDED = 'ADDED';
export const EDITING = 'EDITING';
export const EDITED = 'EDITED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const ERROR = 'ERROR';

export const getNotes = () => {
  return (
    dispatch => {
      dispatch({ type: GETTING });
      axios.get(`https://swon-notes.herokuapp.com/notes`)
        .then(response => {
          dispatch({ type: GET, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
};

export const getNote = id => {
  return (
    dispatch => {
      dispatch({ type: GETTING_NOTE });
      axios.get(`https://swon-notes.herokuapp.com/notes/get/${id}`)
        .then(response => {
          dispatch({ type: GET_NOTE, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        });
    }
  )
};

export const addNote = note => {
  return (
    dispatch => {
      dispatch({ type: ADDING });
      axios.post(`https://swon-notes.herokuapp.com/notes/create`, note)
        .then(response => {
          dispatch({ type: ADDED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const editNote = (id, note) => {
  return (
    dispatch => {
      dispatch({ type: EDITING });
      axios.put(`https://swon-notes.herokuapp.com/notes/edit/${id}`, note)
        .then(response => {
          dispatch({ type: EDITED, payload: { id, ...response.data } });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}

export const deleteNote = id => {
  return (
    dispatch => {
      dispatch({ type: DELETING });
      axios.delete(`https://swon-notes.herokuapp.com/notes/delete/${id}}`)
        .then(response => {
          dispatch({ type: DELETED, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: ERROR, payload: err });
        })
    }
  );
}
