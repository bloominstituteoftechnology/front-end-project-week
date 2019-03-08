import axios from 'axios'

export const GET_NOTES = "GET_NOTES"
export const LOADING = "LOADING"
export const ERROR = "ERROR"

// Nov 25
export const CREATE_NOTE = 'CREATE_NOTE';
export const CREATING_NOTE = 'CREATING_NOTE';


// GET
export const getNotes = () => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.get('http://localhost:5000/notes')
      .then( response => {
        dispatch({type: GET_NOTES, payload: response.data})
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Trouble getting notes.  Take another shot."})
      })
  }
}

// POST
// export const createNote = (newNote) => {
//   return (dispatch) => {
//     dispatch({type: LOADING})
//     axios.post(`http://localhost:5000/notes`, newNote)
//       .then( response => {
//         dispatch({type: GET_NOTES, payload: response.data})
//       })
//       .catch( err => {
//         dispatch({type: ERROR, errorMessage: "Can't create new note"})
//       })
//   }
// }

// NOV 25
export const createNote = note => {
  const newNote = axios.post(`${URL}/create`, note);
  return dispatch => {
    dispatch({
      type: CREATING_NOTE
    });
    newNote
      .then(({
        data
      }) => {
        dispatch({
          type: CREATE_NOTE,
          payload: data
        });
      })
      .catch(err => {
        dispatch({
          type: ERROR,
          payload: err
        });
      });
  };
};

// DELETE

export const deleteNote = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/notes/${id}`)
      .then( response => {
        dispatch({ type: GET_NOTES, payload: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Can't delete note, hit it again."})
      })
  }
}

// PUT
export const updateNote = (updatedNote) => {
  return (dispatch) => {
    dispatch({type: LOADING})
    axios.delete(`http://localhost:5000/notes/${updatedNote.id}`, updatedNote)
      .then( response => {
        dispatch({ type: GET_NOTES, payload: response.data })
      })
      .catch( err => {
        dispatch({type: ERROR, errorMessage: "Can't update note, hit it again."})
      })
  }
}
