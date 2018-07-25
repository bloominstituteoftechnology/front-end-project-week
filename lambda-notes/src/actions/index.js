import axios from 'axios';

// GET, POST, PUT, DELETE

export const GET_NOTES = 'GET_NOTES';

export const getNotes = () => {
    const payload = axios.get("https://localhost:3000/api/notes");
    return {
        type: GET_NOTES, 
        payload
    };
}

export const addNote = note => {
  axios.post("https://localhost:3000/api/notes", note);
  return dispatch => {
      dispatch(getNotes());
  }
}

export const noteEdit = (note, id) => {
    axios.put('https://localhost:3000/api/notes/${_id}', note)
    return dispatch => {
        dispatch(getNotes());
    }
} 


