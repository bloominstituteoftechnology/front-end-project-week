import axios from 'axios';

export const GETTING_NOTES = 'GETTING_NOTES';
export const GOT_NOTES = 'GOT_NOTES';
export const ERROR = 'ERROR';
export const NOTE_SAVED = 'NOTE_SAVED';
export const NOTE_DELETED = 'NOTE_DELETED';
export const NOTE_UPDATED = 'NOTE_UPDATED';

const URL = 'http://localhost:5000/notes/';

export const getNotes = () => {
    const data = axios.get(URL);
    return (dispatch) => {
        dispatch({type: GETTING_NOTES});
        data
            .then(response => {
                dispatch({
                    type: GOT_NOTES,
                    payload: response.data
                });
            })
            .catch(error => {
                dispatch({
                    type: ERROR,
                    payload: error
                });
            });
    };
};

export const addNote = (newNote) => {
    const data = axios.post(URL, newNote);
    return (dispatch) => {
      data
        .then(response => dispatch({
          type: NOTE_SAVED,
          payload: response.data
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error,
          })
        });
    }
  };
  
export const deleteNote = (id) => {
    const data = axios.delete(`${URL}${id}`);
    return (dispatch) => {
      data
        .then(response => dispatch({
          type: NOTE_DELETED,
          payload: response.data
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error
          })
        });
    }
  }

export const updateNote = (id, updatedNote) => {
    const data = axios.put(`${URL}${id}`,updatedNote);
    return (dispatch) => {
      data
        .then(response => dispatch({
          type: NOTE_UPDATED,
          payload: response.data,
        }))
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: error,
          })
        });
    }
  };
