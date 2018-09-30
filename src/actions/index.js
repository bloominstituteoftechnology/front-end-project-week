import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_RECIEVED = 'NOTES_RECIEVED';
export const ERROR = 'ERROR';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';
export const SORT_NOTE = 'SORT_NOTE';
export const SENDING_NEW_USERDATA = 'SENDING_NEW_USERDATA';
export const USER_CREATED = 'USER_CREATED';
export const SENDING_CREDENTIALS = 'SENDING_CREDENTIALS';
export const CREDENTIALS_ACCEPTED = 'CREDENTIALS_ACCEPTED';
export const FAILED_LOGIN_ATTEMPT = 'FAILED_LOGIN_ATTEMPT';
export const FAILED_REGISTRATION_ATTEMPT = 'FAILED_REGISTRATION_ATTEMPT';
export const CLEAR_NOTES = 'CLEAR_NOTES';

// export const loginUser = (creds) => {
//   return function(dispatch){
//     dispatch({type: SENDING_CREDENTIALS})
//     axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/login', creds)
//     // axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/login', creds)
//     .then(res => {
//       localStorage.setItem('JWT', res.data.token)
//       dispatch({type: CREDENTIALS_ACCEPTED, payload: res.data})
//       this.getNotes();
//     })
//     .catch(err => {
//       dispatch({type: FAILED_LOGIN_ATTEMPT, payload: err})
//     })
//   }
// }

// export const createUser = (newUser) => {
//   // console.log(newUser)
//   return function(dispatch){
//     dispatch({type: SENDING_NEW_USERDATA})
//     axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/register', newUser)
//     // axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/welcome/register', newUser)
//     .then(res => {
//       localStorage.setItem('JWT', res.data.token)
//       dispatch({type: USER_CREATED, payload: res.data});
//       console.log(this)
//       this.getNotes();
//     })
//     .catch(err => {
//       dispatch({type: FAILED_REGISTRATION_ATTEMPT, payload: err})
//     })
//   }
// }

export const clearNotes = () => {
  return function(dispatch){
    dispatch({type: CLEAR_NOTES})
  }
}

export const getNotes = () =>  {
  return function(dispatch){
    if(localStorage.getItem('JWT')){
      // console.log('token')
      dispatch({type: FETCHING_NOTES});
      const token = localStorage.getItem('JWT')
      const authHeader = {
        headers: {
          Authorization: token, 
        }
      }
      axios.get('https://lambda-notes-backend-mjk.herokuapp.com/api/notes/all', authHeader)
        .then(res => {
        dispatch({type: NOTES_RECIEVED, payload: res.data})
      })
        .catch(err => {
        dispatch({type: ERROR, payload: err})
      })
    } else {
      dispatch({type: ERROR, payload: 'there was no token found'})      
    }
  }
}

// export const addNote = (newNote) =>  {
//   // console.log('addnote', newNote)
//   return function(dispatch){
//     if(localStorage.getItem('JWT')){
//       dispatch({type: ADDING_NOTE});
//       const token = localStorage.getItem('JWT')
//       console.log(token)
//       const authHeader = {
//         headers: {

//           Authorization: token,    
//         } 
//       }
//     //auth headers go after the body ----- key--------
//     axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/notes/', {
//     // axios.post('https://lambda-notes-backend-mjk.herokuapp.com/api/notes/', {
//       "title": newNote.title,
//       "textBody": newNote.textBody,
//     }, authHeader).then(res => {
//       dispatch({type: NOTE_ADDED, payload: res});
//     }).catch(err => {
//       dispatch({type: ERROR, payload: err})
//     })
//   }
// }
// }

// export const deleteNote = (id) =>  {
//   return function(dispatch){
//     dispatch({type: DELETING_NOTE});
//     axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com/notes/${id}`)
//     // axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com/notes/${id}`)
//     .then(res => {
//     // axios.delete(`https://lambda-notes-backend-mjk.herokuapp.com//api/notes/${id}`).then(res => {
//       dispatch({type: NOTE_DELETED, payload: res});
//       dispatch(getNotes());
//     }).catch(err => {
//       dispatch({type: ERROR, payload: err})
//     })
//   }
// }

// export const editNote = (editedNote) =>  {
//   return function(dispatch){
//     dispatch({type: EDITING_NOTE});
//     axios.put(`https://lambda-notes-backend-mjk.herokuapp.com/api/notes/${editedNote.id}`,
//     // axios.put(`https://lambda-notes-backend-mjk.herokuapp.com//api/notes/${editedNote.id}`,
//       { "tags": editedNote.tags,
//         "title": editedNote.title,
//         "textBody": editedNote.textBody}
//     ).then(res => {
//       dispatch({type: NOTE_EDITED, payload: res});
//       dispatch(getNotes());
//     }).catch(err => {
//       dispatch({type: ERROR, payload: err})
//     })
//   }
// }

export const sortNote = (newlySortedArray) => {
  return function(dispatch){
    dispatch({type: SORT_NOTE, payload: newlySortedArray});
  }
}
