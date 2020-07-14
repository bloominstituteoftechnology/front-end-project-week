import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_FETCHED = 'NOTES_FETCHED';
export const FETCH_ERROR = 'FETCH_ERROR';
export const ADDING_NOTE = 'ADDING_NOTE';
export const NOTE_ADDED = 'NOTE_ADDED';
export const DELETING_NOTE = 'DELETING_NOTE';
export const NOTE_DELETED = 'NOTE_DELETED';
export const EDITING_NOTE = 'EDITING_NOTE';
export const NOTE_EDITED = 'NOTE_EDITED';
export const NOTES_UPDATED = 'NOTES_UPDATED';
export const SORTING_NOTES = 'SORTING_NOTES';
export const NOTES_SORTED = 'NOTES_SORTED';

export const sortNotes = () => dispatch => {
  dispatch({ type: SORTING_NOTES });

  axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log(res.data.sort(function (a, b) {
        var titleA = a.title.toUpperCase();
        var titleB = b.title.toUpperCase();
        if (titleA < titleB) {
          return -1;
        }
        if (titleA > titleB) {
          return 1;
        }
        return 0; 
      }))
      dispatch({ type: NOTES_SORTED, payload: res.data })
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR })
    });
}

export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES });

  axios.get('https://killer-notes.herokuapp.com/note/get/all')
    .then(res => {
      console.log('fetch notes res', res);
      dispatch({ type: NOTES_FETCHED, payload: res.data })
    
    })
    .catch(err => {
      dispatch({ type: FETCH_ERROR })
    });
}

export const newNote = note => dispatch => {
  dispatch ({ type: ADDING_NOTE });

  axios.post('https://killer-notes.herokuapp.com/note/create', note)
    .then(res => {
        // axios.put(`https://killer-notes.herokuapp.com/note/edit/${res.data.success}`, note)
        //     .then(res => {
              console.log('addNew', res.data);
                dispatch({ type: NOTE_ADDED, payload: res.data })
            })
            .catch(err => {
                dispatch({ type: FETCH_ERROR, payload: err })
            })
    
    .catch(err => {
      console.log('newNote', note);
      dispatch({ type: FETCH_ERROR, payload: err })
    });
}

export const deleteNote = id => dispatch => {
  dispatch ({ type: DELETING_NOTE });

  axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
  .then(res => {
    console.log('delete action', res);
    dispatch({ type: NOTE_DELETED, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: FETCH_ERROR, payload: err })
  });
}

export const editNote = (updatedNote) => dispatch => {
  dispatch ({ type: EDITING_NOTE });

  axios.put(`https://killer-notes.herokuapp.com/note/edit/${updatedNote._id}`, updatedNote)
  .then(res => {
    dispatch({ type: NOTE_EDITED, payload: res.data })
  })
  .catch(err => {
    dispatch({ type: FETCH_ERROR, payload: err })
  });
}

export const notesUpdated = () => {
  return {
    type: NOTES_UPDATED
  }
}