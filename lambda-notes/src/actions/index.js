import axios from 'axios';

export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const ERROR = 'ERROR';
export const ADDNOTE = 'ADDNOTE';
export const EDITNOTE = 'EDITNOTE';
export const DELETENOTE = 'DELETENOTE';
export const NOTE_SAVED = 'NOTE_SAVED';
export const SAVING_NOTE = 'SAVING_NOTE';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';

export const getNotes = () => {
  return dispatch => {
    dispatch({ type: FETCHING })
    axios.get('http://localhost:5000/api/notes/')
      .then( (response) => {
        // console.log('RESP',response.data);
        dispatch({type: FETCHED, notes: response.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, error: 'ERROR GETTING NOTES'})
      });
  }
}

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
  return dispatch => {
      dispatch({ type: SAVING_NOTE });
      axios
        .post('http://localhost:5000/api/notes/', note)
        .then( response => {
          dispatch({ type: NOTE_SAVED, notes: response.data})
        })
        .catch( () => {
          dispatch({ type: ERROR, error: 'ERROR ADDING NOTE'})
        })
  }
}

export const updateNote = note => {
  return dispatch => {
    const {title, content, id} = note;

    dispatch({type: UPDATING})
    axios.put(`http://localhost:5000/api/notes/${id}`, {title, content})
    .then(response => {
      dispatch({type: UPDATED, notes: response.data})
    })
    .catch(err => {
      dispatch({ type: ERROR, error: 'ERROR UPDATING NOTE'})
    })
  }
}

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
      })
      .catch(err => {
        dispatch({ type: ERROR, error: "ERROR DELETING NOTE"});
      })
  }
}