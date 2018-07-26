import axios from 'axios';

// GET, POST, PUT, DELETE

export const FETCH_NOTES = 'GET_NOTES';

export const getNotes = () => {
    const fetchNotes = axios.get("https://localhost:3000/api/notes");
    return {
        type: FETCH_NOTES, 
        // payload
    };


}

export const addNote = note => {
  axios.post("https://localhost:3000/api/notes", note);
  return dispatch => {
      dispatch(getNotes());
  }
}

export const noteEdit = (note, id) => {
    axios.put("https://localhost:3000/api/notes/${_id}", note);
    return dispatch => {
        dispatch(getNotes());
    }
} 

export const deleteNote = id => {
    axios.delete("https://localhost:3000/api/notes/${_id}");
    return dispatch => {
        dispatch(getNotes());
    }
}


