import axios from 'axios';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ERROR_FETCHING = 'ERROR_FETCHING';
export const CREATE_NOTE = 'CREATE_NOTE';
export const ERROR_CREATING = 'ERROR_CREATING';
export const FETCH_NOTE = 'FETCH_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR_DELETING = 'ERROR_DELETING';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const ERROR_UPDATING = 'ERROR_UPDATING';

export const getNotes = () => {
  const notes = axios.get(`http://localhost:3333/notes`);
  return dispatch => {
<<<<<<< HEAD
    dispatch({ type: FETCH_NOTES });
    notes
      .then(response => {
        console.log( response.data );
        dispatch({
          type: FETCHED_NOTES,
          payload: response.data
        });
=======
    dispatch({ type: FETCHING })
    axios.get('http://localhost:5000/api/notes/')
      .then( (response) => {
        // console.log('RESP',response.data);
        dispatch({type: FETCHED, notes: response.data})
>>>>>>> ca13fdc6ef270479d87affa1e3c68c4831bc3a40
      })
      .catch(err => {
        dispatch({
          type: ERROR_FETCHING,
          payload: 'ERROR Fetching Notes'
        });
      });
  };
};

<<<<<<< HEAD
export const getNote = id => {
  const note = axios.get(`http://localhost:3333/notes/${id}`)
=======
export const getNote = (id) => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios.get(`http://localhost:5000/api/notes/${id}`)
      .then( (response) => {
        // console.log('RESP',response.data);
        dispatch({type: FETCHED, notes: response.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'ERROR GETTING NOTE'})
      });
  }
}

export const createNote = (note) => {
>>>>>>> ca13fdc6ef270479d87affa1e3c68c4831bc3a40
  return dispatch => {
    note
    .then(response => {
      dispatch({ type: FETCH_NOTE, payload: response.data });
    })
    .catch(error => {
      console.error(error);
    });
  };
};

export const deleteNote = id => {
  const note = axios.delete(`http://localhost:3333/notes/${id}`);
    return dispatch => {
      dispatch({ type: DELETE_NOTE });
      note
      .then(response=> {
        dispatch(getNotes());
      })
      .catch(err => {
        dispatch({
          type: ERROR_DELETING,
          payload: 'ERROR deleting Note'
        });
      });
    };
};

export const updateNote = note => {
  return dispatch => {
    const {title, content, id} = note;
    console.log('UPDATENote', title, content, id)
    dispatch({type: UPDATING})
    axios.put(`http://localhost:3333/notes/${id}`, {title, content})
    .then(response => {
      dispatch({type: UPDATED, notes: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR_UPDATING, error: 'ERROR UPDATING NOTE'})
    })
  }
}

<<<<<<< HEAD
export const createNote = data => {
  const notes = axios.post(`http://localhost:3333/notes`, data);
    return dispatch => {
      notes
      .then(response=> {
        dispatch({ type: CREATE_NOTE, payload: response.data })
=======
// export const startUpdating = note => {
//   return {
//     type: UPDATING,
//     note
//   };
// };

export const deleteNoteOnState = id => {
  return dispatch => {
    dispatch({ type: FETCHING})
    axios.delete(`http://localhost:5000/api/notes/${id}`)
      .then(response => {
        // console.log('DELETE',response);
        dispatch({ type: FETCHED, notes: response.data });
>>>>>>> ca13fdc6ef270479d87affa1e3c68c4831bc3a40
      })
      .catch(err => {
        dispatch({
          type: ERROR_CREATING,
          payload: 'ERROR creating note'
        });
      });
    };
}