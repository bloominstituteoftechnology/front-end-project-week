import axios from 'axios';


export const FETCHING_NOTES = 'FETCHING_NOTES';
export const FETCHING_NOTES_SUCCESS = 'FETCHING_NOTES_SUCCESS';
export const FETCHING_NOTES_FAILURE = 'FETCHING_NOTES_FAILURE';

export const ADDING_NOTES = 'ADDING_NOTES';
export const ADDING_NOTES_SUCCESS = 'ADDING_NOTES_SUCCESS';
export const ADDING_NOTES_FAILURE = 'ADDING_NOTES_FAILURE';

export const FETCHING_NOTES_BY_ID = 'FETCHING_NOTES_BY_ID';
export const FETCHING_NOTES_BY_ID_SUCCESS = 'FETCHING_NOTES_BY_ID_SUCCESS';
export const FETCHING_NOTES_BY_ID_FAILURE = 'FETCHING_NOTES_BY_ID_FAILURE';



  export const fetchNotesById = (Id) => dispatch => {
    dispatch({ type: FETCHING_NOTES_BY_ID });

    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${Id}`)
      .then(response => {
        dispatch({ type: FETCHING_NOTES_BY_ID_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_NOTES_BY_ID_FAILURE, payload: error });
    });  
  }

  export const fetchNotes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });
    
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/all`)
      .then(response => {
        dispatch({ type: FETCHING_NOTES_SUCCESS, payload: response.data});
      })
      .catch(error => {
        dispatch({ type: FETCHING_NOTES_FAILURE, payload: error });
    });  
  }

  export const addNote = (data) => dispatch => {
    dispatch({ type: ADDING_NOTES });
    
    axios
      .post(`https://fe-notes.herokuapp.com/note/create`,data)
      .then(response => {
        dispatch({ type: ADDING_NOTES_SUCCESS});
      })
      .catch(error => {
        dispatch({ type: ADDING_NOTES_FAILURE, payload: error });
    });  
  }
