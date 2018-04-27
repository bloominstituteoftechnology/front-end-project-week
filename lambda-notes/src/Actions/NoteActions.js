import axios from 'axios';

export const LOGIN = 'LOGIN';
export const GETNOTES = 'GETNOTES';
export const ADDNOTE = 'ADDNOTE';
export const UPDATENOTE = 'UPDATENOTE';
export const DELETENOTE = 'DELETENOTE';

export const logIn = (user) => {
  const promise = axios.post('http://localhost:5000/api/login', user);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: LOGIN, payload: response.data});
      }).catch(err => {
        console.log(err);
      })
  }
}
export const registerUser = (newUser) => {
  const promise = axios.post('http://localhost:5000/api/register', newUser);
  return dispatch => {
    promise
      .then(response => {
        console.log(response);
      })
  }
}
export const getNotes = () => {
  const promise = axios.get('http://localhost:5000/api/notes');
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: GETNOTES, payload: response.data})
      })
      .catch(err => {
        console.log(err);
      })
  }
}

export const addNote = (note) => {
  const promise = axios.post('http://localhost:5000/api/notes', note);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: GETNOTES, payload: response.data})
      })
  }
}
export const updateNote = (id, update) => {
  const promise = axios.put(`http://localhost:5000/api/notes/${id}`, update);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type: GETNOTES, payload:response.data})
      }).catch(err => {
        console.log(err);
      })
  }
}
export const deleteNote = (user, id) => {
  const promise = axios.delete(`http://localhost:5000/api/notes/${id}/${user}`);
  return dispatch => {
    promise
      .then(response => {
        dispatch({type:GETNOTES, payload: response.data});
      }).catch(err => {
        console.log(err);
      })
  }
}
