import firebase, { firebaseRef} from '../firebase';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const LOGGED_OUT = 'LOGGED_OUT';
export const LOGGED_IN = 'LOGGED_IN';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export const fetchNotes = () => {
  return (dispatch) => {
    firebaseRef.child('notes').once('value').then((snapshot)=>{
      let notes = snapshot.val() || {};
      let parsedNotes = [];
      Object.keys(notes).forEach((noteId) => {
        parsedNotes.push({
          id: noteId,
          ...notes[noteId]
        });
      });
      dispatch({
        type: FETCHED_NOTES,
        payload: parsedNotes
      });
    }, ()=>{
      console.log('failed fetching');
    });
  }
}

export const addNote = (note) => {
  return (dispatch) => {
    // build object for firebase
    let noteOb = {
      title: note.title,
      content: note.content
      }

    // create a reference to the new added object
    let addNoteRef = firebaseRef.child('notes').push(noteOb);

    addNoteRef.then(() => {
      // add new object key as id to new note object for redux
      noteOb.id = addNoteRef.key;

      dispatch({
        type: ADD_NOTE,
        payload: noteOb
      });
    });
  }
};

export const deleteNote = (key) => {
  return (dispatch) => {
    // remove firebase item by key
    let deleteNoteRef = firebaseRef.child(`notes/${key}`).remove();
    // remove redux item by key as id
    dispatch({
      type: DELETE_NOTE,
      payload: key
    });
  }
};

export const editNote = (note) => {
  return (dispatch) => {
    firebaseRef.child(`notes/${note.id}`).update(note).then(()=>{
      dispatch({
        type: EDIT_NOTE,
        payload: note
      });
    });

  }
};

export const toggleModal = (id) => {
  return {type: TOGGLE_MODAL, payload: id}
}

export const signUp = (newUser) => {
  console.log('signup newuser', newUser);
  // fetch all user
  // compare username with new user
  // if unique then push new user to firebase

  return (dispatch) => {
    // fetch all users
    firebaseRef.child('users').once('value').then((snapshot)=>{
      console.log('fetched users');
      let users = snapshot.val() || {};
      // loop through users to compare username
      Object.keys(users).forEach((userKey)=>{
        // if new username already exists in db then dispatch error
        if(users[userKey].username === newUser.ursername){
          dispatch({
            type: 'LOGIN_ERROR',
            payload: 'Username already exist, choose a different name.'
          });
        }
      });
        console.log('prepare to push new user');
        // else set new user to firebase
        let userRef = firebaseRef.child('users').push();

          userRef.then(()=>{
            console.log('add new user success!');
            dispatch({
              type: 'LOGGED_IN',
              payload: newUser
            });
          }, ()=>{
            console.log('add new user failed!');
          });
    });
    let userRef = firebaseRef.child('users').push(newUser);

  }
}

export const signIn = (user) => {
  return {
    type: 'SIGN_IN',
    payload: user
  };
}

// export const signOut = (user) => {
//   return {
//     type: 'SIGN_IN',
//     payload: user
//   };
// }