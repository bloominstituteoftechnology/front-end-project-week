import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_NOTES = 'GET_NOTES';
export const GETTING_NOTES = 'GETTING_NOTES';
export const CREATING_NOTE = 'CREATING_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const UPDATE_NOTE = 'UPDATE_NOTES';
export const DELETE_NOTE = 'DELETE_NOTE';
export const UPDATING_NOTE = 'UPDATING_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const SINGLE_NOTE = 'SINGLE_NOTE';
export const GETTING_SINGLE_NOTE = 'GETTING_SINGLE_NOTE';
export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';




export const getNotes = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_NOTES })
    const token = localStorage.getItem('jwt');
 //  const endpoint = 'http://localhost:5000/api/notes';
    const options = {
       headers: {
        Authorization: token
      } 
    };
    axios
   //  .get('http://localhost:5000/api/notes', options)
   // axios
   // .get('https://fe-notes.herokuapp.com/note/get/all')
 // .get('http://localhost:5000/api/notes')
    .get('https://frontend-william.herokuapp.com/api/notes', options)
      .then(response => {
        //console.log("response:", response)
        dispatch({ type: GET_NOTES, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const createNote = (newNote) => {
 
  return (dispatch) => {
    dispatch({ type: CREATING_NOTE })
    axios.post('https://frontend-william.herokuapp.com/api/notes', newNote)
   // axios.post('http://localhost:5000/api/notes', newNote)  
    .then(response => {
        dispatch({ type: CREATE_NOTE, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const updateNote = (newNote, id) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_NOTE })
   const URL = 'https://frontend-william.herokuapp.com/api/notes/' + id;
 //  const URL = 'http://localhost:5000/api/notes/' + id;
    axios
      .put(URL, {
        title: newNote.title,
        textBody: newNote.textBody,
        tags: "",
        _id: 1234,
        pictures: newNote.pictures,
        pictureDataURLs: newNote.pictureDataURLs,
        users_id: 1
      })
      .then(response => {
        dispatch({ type: UPDATE_NOTE, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const viewNote = (id) => {
// console.log("id:", id)
  return (dispatch) => {
    dispatch({ type: GETTING_SINGLE_NOTE })
   const URL = 'https://frontend-william.herokuapp.com/api/notes/' + id;
  //  const URL = 'http://localhost:5000/api/notes/' + id;
    axios
      .get(URL)
      .then(response => {
       let noteData = localStorage.getItem('localNotes');
       noteData.concat(response.data);
     
     
       localStorage.setItem('localNotes', noteData);
      // console.log("response.data", response.data); 
      // selectedNotes.push(response.data);
        dispatch({ type: SINGLE_NOTE, payload: response.data })
        return response.data;
       
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const deleteNote = (id) => {
  return (dispatch) => {
    const URL = 'https://frontend-william.herokuapp.com/api/notes/' + id;
  // const URL = 'http://localhost:5000/api/notes/' + id;
    dispatch({ type: DELETING_NOTE })
    axios
      .delete(URL)
      .then(response => {
        dispatch({ type: DELETE_NOTE, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const updateSingleNote = note => {
  return {
    type: SINGLE_NOTE,
    payload: note
  };
};