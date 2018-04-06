// import moment from 'moment';
import axios from 'axios';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';
export const SIGN_IN = 'SIGN_IN';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const SORT_LIST = 'SORT_LIST';

const URL = 'http://localhost:5000/api';

export const signUp = (newUser) => {
  if(newUser.email === '' || newUser.password === ''){
    return {
      type: LOGIN_ERROR,
      payload: 'Please enter Email and Password'
    }
  }else{
    return (dispatch) => {
      // console.log(newUser);
      axios.post(`${URL}/users`, {
        email: newUser.email,
        password: newUser.password
      }).then(newUser => {
          dispatch({
            type: LOGGED_IN,
            payload: newUser
          });
      }).catch(err => console.log(err))
    }
  }
}

export const signIn = (user) => {
  if(user.email === '' || user.password === ''){
    return {
      type: LOGIN_ERROR,
      payload: 'Please enter Email and Password'
    }
  }else{

    return (dispatch) => {
      axios.post(`${URL}/login`, {
        email: user.email,
        password: user.password
      })
      .then(userResObj => {
        // console.log(userResObj.data);
        dispatch({
          type: LOGGED_IN,
          payload: userResObj.data.user
        });
        sessionStorage.setItem('token', userResObj.data.token);
      })
    }
  }
}

// export const fetchNotes = (username) => {
//   return (dispatch) => {
//     dispatch({
//       type: FETCHING_NOTES
//     });
//     firebaseRef.child('notes').once('value').then((snapshot)=>{
//       let notes = snapshot.val() || {};
//       let parsedNotes = [];
//       Object.keys(notes).forEach((noteId) => {
//         parsedNotes.push({
//           id: noteId,
//           ...notes[noteId]
//         });
//       });

//       parsedNotes = parsedNotes.filter((notes) => {
//         return notes.user === username;
//       });

//       dispatch({
//         type: FETCHED_NOTES,
//         payload: parsedNotes
//       });
//     }, ()=>{
//       console.log('failed fetching');
//     });
//   }
// }

// export const addNote = (note) => {
//   let month = moment().format('MMM');
//   let day = moment().format('Do');
//   let year = moment().format('YYYY');
//   let hour = moment().format('H');
//   let min = moment().format('mm');
//   if(hour > 12){
//     hour =  hour / 12;
//     min = min + 'pm';
//   }else{
//     min = min + 'am';
//   }
//   note.date = `${month} ${day}, ${year} @ ${hour}:${min}`;
//   note.timeStamp = moment().unix();
//   return (dispatch) => {
//     // create a reference to the new added object
//     let addNoteRef = firebaseRef.child('notes').push(note);

//     addNoteRef.then(() => {
//       // add new object key as id to new note object for redux
//       note.id = addNoteRef.key;

//       dispatch({
//         type: ADD_NOTE,
//         payload: note
//       });
//     });
//   }
// };

// export const deleteNote = (key) => {
//   return (dispatch) => {
//     // remove firebase item by key
//     let deleteNoteRef = firebaseRef.child(`notes/${key}`).remove();
//     // remove redux item by key as id
//     dispatch({
//       type: DELETE_NOTE,
//       payload: key
//     });
//   }
// };

// export const editNote = (note) => {
//   return (dispatch) => {
//     firebaseRef.child(`notes/${note.id}`).update(note).then(()=>{
//       dispatch({
//         type: EDIT_NOTE,
//         payload: note
//       });
//     });

//   }
// };

export const toggleModal = (id) => {
  return {type: TOGGLE_MODAL, payload: id}
}

export const sortList = (type) => {
  return ({
    type: SORT_LIST,
    payload: type
  });
}

export const signOut = () => {
  sessionStorage.clear();
  return {
    type: LOGGED_OUT
  };
}