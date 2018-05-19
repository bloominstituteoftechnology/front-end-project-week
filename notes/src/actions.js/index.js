import axios from 'axios';
export const FETCHNOTES = 'FETCHNOTES';
export const ERR = "ERR";

export const fetchStuff = () => {
    return dispatch => {
        axios.get(`http://localhost:5000/notes`)
        .then(response => {
            dispatch({ type: FETCHNOTES, payload: response.data})
        })
        .catch(error => {
            dispatch({ type: ERR })
        })
    }
}
export const saveData = note => {
    return dispatch => {
    axios
    .post(`http://localhost:5000/notes`, note) 
    .then(response => {
        dispatch({ type: FETCHNOTES, payload: response.data})
    })
    .catch(error => {
      console.log(error);
    });
}
}
export const deleteNote = noteId => {
    return dispatch => {
    axios
    .delete(`http://localhost:5000/notes/${noteId}`)
    .then(response => {
        dispatch({ type: FETCHNOTES, payload: response.data})
    })
    .catch(err => {
      console.log(err);
    });
    }
}
export const editNotes = note => {
    return dispatch => {
        axios.put(`http://localhost:5000/notes/${note.id}`, note)
        .then(response => {
            console.log(response)
            dispatch({ type: FETCHNOTES, payload: response.data})
        })
        .catch(error => {
            dispatch({ type: ERR })
        })
    }
}
