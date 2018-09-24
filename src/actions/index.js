//actions
import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_RECIEVED = 'NOTES_RECIEVED';
export const ERROR = 'ERROR';

export const getNotes = () =>  {
  return function(dispatch){
    dispatch({type: FETCHING_NOTES});
    axios.get('http://localhost:3300/api/notes/')
      .then(res => {
      dispatch({type: NOTES_RECIEVED, payload: res.data})
    })
      .catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';

export const addNote = (newNote) =>  {
  console.log('addnote', newNote)
  return function(dispatch){
    dispatch({type: ADDING_NOTE});
    axios.post('http://localhost:3300/api/notes/', {
        "tags": ["tag", "otherTag"],
        "title": newNote.title,
        "textBody": newNote.textBody
    }).then(res => {
      dispatch({type: NOTE_ADDED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';

export const deleteNote = (id) =>  {

  return function(dispatch){
    dispatch({type: DELETING_NOTE});
    axios.delete(`http://localhost:3300/api/notes/${id}`).then(res => {
      dispatch({type: NOTE_DELETED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';

export const editNote = (editedNote) =>  {
  console.log(editedNote, 'editedNote')
  return function(dispatch){
    dispatch({type: EDITING_NOTE});
    axios.put(`http://localhost:3300/api/notes/${editedNote._id}`,
      { "tags": editedNote.tags,
        "title": editedNote.title,
        "textBody": editedNote.textBody}
    ).then(res => {
      dispatch({type: NOTE_EDITED, payload: res});
      dispatch(getNotes());
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}

export const SORT_NOTE = 'SORT_NOTE';

export const sortNote = (newlySortedArray) => {
  return function(dispatch){
    dispatch({type: SORT_NOTE, payload: newlySortedArray});
  }
}

export const MARKDOWN_NOTES = 'MARKDOWN_NOTES';

export const markdownNotes = (markedDownArray) => {
  // let newArr = markedDownArray.map(note => {
  //   var text = note.textBody,
  //   target = textBody,
  //   converter = new showdown.Converter(),
  //   html = converter.makeHtml(text)
  //   note.textBody = text
  // })
  return function(dispatch){
    dispatch({type: MARKDOWN_NOTES, payload: markedDownArray});
  }
}
