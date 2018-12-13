import axios from 'axios';

export const FETCH_NOTES_START = 'FETCH_NOTES_START';
export const FETCH_NOTES_SUCCESS = 'FETCH_NOTES_SUCCESS';
export const FETCH_NOTES_FAILURE = 'FETCH_NOTES_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_SUCCESS = 'ADD_NOTE_SUCCESS';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const CHANGE_CURRENT_VIEW = 'CHANGE_CURRENT_VIEW';

export const FETCH_NOTE_START = 'FETCH_NOTE_START';
export const FETCH_NOTE_SUCCESS = 'FETCH_NOTE_SUCCESS';
export const FETCH_NOTE_FAILURE = 'FETCH_NOTE_FAILURE';

export const UPDATE_NOTE_START = 'UPDATE_NOTE_START';
export const UPDATE_NOTE_SUCCESS = 'UPDATE_NOTE_SUCCESS';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_SUCCESS = 'DELETE_NOTE_SUCCESS';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

/*
https://fe-notes.herokuapp.com/note/get/all
a GET request to this route will return a list of all the notes.

https://fe-notes.herokuapp.com/note/get/id
a GET request to this route (with "id" replaced by the note ID) will return the note with the specified ID.

https://fe-notes.herokuapp.com/note/create
a POST request to this route with the title and text in the req.body will create a new note. The response from the server will be the ID of the new note.

https://fe-notes.herokuapp.com/note/edit/id
a PUT request to this route with the title and text in the req body will edit the note with the specified ID. The response from the server will be the updated note object.

https://fe-notes.herokuapp.com/note/delete/id
a DELETE request to this route will delete the note with the specified ID.
*/

export const deleteNote = note => dispatch => {
  dispatch({ type: DELETE_NOTE_START });
  axios
    .post(`https://fe-notes.herokuapp.com/note/delete/${note.id}`, note)
    .then(response => {
      console.log('post success payload below:');
      console.log(response.data);
      dispatch({ type: DELETE_NOTE_SUCCESS, payload: response.data });
      //refetch all notes from server
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
          dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
        }); 
      })
    .catch(err => {
      //ideally we would also fetch notes here too to prevent async on notes display and server
      dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
    });
}



export const editNote = note => dispatch => {
  dispatch({ type: UPDATE_NOTE_START });
  axios
    .post(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, note)
    .then(response => {
      console.log('post success payload below:');
      console.log(response.data);
      dispatch({ type: UPDATE_NOTE_SUCCESS, payload: response.data });
      //refetch all notes from server
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
          dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
        }); 
      })
    .catch(err => {
      //ideally we would also fetch notes here too to prevent async on notes display and server
      dispatch({ type: UPDATE_NOTE_FAILURE, payload: err });
    });
}



export const changeView = data => dispatch => {
  const currentView = data.currentView;
  const id = data.id;

  if(currentView === "notes"){
    axios
      .get('https://fe-notes.herokuapp.com/note/get/all')
      .then(response => {
        dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
      });
  }else if(currentView === "note"){
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        dispatch({ type: FETCH_NOTE_SUCCESS, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_NOTE_FAILURE, payload: err });
      });
  }
  dispatch({ type: CHANGE_CURRENT_VIEW, payload: currentView});
}

export const addNote = note => dispatch => {
  console.log('**** NOTE to add: ');
  console.log(note);
  dispatch({ type: ADD_NOTE_START });
  axios
    .post('https://fe-notes.herokuapp.com/note/create', note)
    .then(response => {
      console.log('post success payload below:');
      console.log(response.data);
      dispatch({ type: ADD_NOTE_SUCCESS, payload: response.data });
      //fetch Notes since we are returning to Notes view and a note has been added
      //honestly we could probably just manually append the array and not make an external API call
      //but whatever
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response => {
          dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
        })
        .catch(err => {
          dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
        }); 
      })
    .catch(err => {
      //ideally we would also fetch notes here too to prevent async on notes display and server
      dispatch({ type: ADD_NOTE_FAILURE, payload: err });
    });
};

export const fetchNotes = () => dispatch => {
  console.log("did fetch NOTES");
  dispatch({ type: FETCH_NOTES_START });
  axios
    .get('https://fe-notes.herokuapp.com/note/get/all')
    .then(response => {
      console.log("fetch NOTES: success");
      console.log(response.data);
      dispatch({ type: FETCH_NOTES_SUCCESS, payload: response.data });
    })
    .catch(err => {
      console.log("fetch NOTES: error");
      dispatch({ type: FETCH_NOTES_FAILURE, payload: err });
    });
};