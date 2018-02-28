import firebase, { firebaseRef} from '../firebase';

export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const FETCHED_NOTES = 'FETCHED_NOTES';

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