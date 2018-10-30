import axios from 'axios';

export const FETCHING_NOTES= 'FETCHING_NOTES';
export const FETCHED_NOTES = 'FETCHED_NOTES';
export const ERROR_FETCHING_NOTES = 'ERROR_FETCHING_NOTES';

export const ADDING_NEW_NOTE = 'ADDING_NEW_NOTE';
export const NEW_NOTE_ADDED = 'NEW_NOTE_ADDED';
export const ERROR_ADDING_NEW_NOTE = 'ERROR_ADDING_NEW_NOTE';

export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const ERROR_DELETING_NOTE = 'ERROR_DELETING_NOTE';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';

export const UPDATING_NOTE = 'UPDATING_NOTE';
export const UPDATED_NOTE = 'UPDATED_NOTE';
export const ERROR_UPDATING_NOTE = 'ERROR_UPDATING_NOTE'; 

export const grabbingNotes = () => dispatch => {
    dispatch({ type: FETCHING_NOTES });
    const promise = axios.get('https://localhost:9000/api/notes')
    

    promise
        .then(response => {
            this.setState({ notes: response.data.note })
           
            dispatch({ type: FETCHED_NOTES, payload: response.data });
            console.log(this.state);
        })
        .catch(error => {
            console.log("Error grabbing all notes", error)
            dispatch({ type: ERROR_FETCHING_NOTES, payload: error});
        });
};

export const addNewNote = note => dispatch => {
    dispatch({ type: ADDING_NEW_NOTE });
    axios.post('https://localhost:9000/api/notes', note)
    .then(response => {
        dispatch({ type: NEW_NOTE_ADDED, payload: response.data });
    })
    .catch(error => {
        console.log("Error adding new note", error)
        dispatch({ type: ERROR_ADDING_NEW_NOTE, payload: error});
    });
};

export const deleteNote = noteId => dispatch => {
    dispatch({ type: DELETING_NOTE });
    axios.delete(`https://localhost:9000/api/notes/${noteId}`)
    .then(response => {
        dispatch({ type: DELETED_NOTE, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR_DELETING_NOTE, payload: error });
    });
}

export const setUpdateNote = id => {
    return { type: SET_UPDATE_NOTE, payload: id, };
};

export const updateNote = noteId => dispatch => {
    dispatch({ type: UPDATING_NOTE });
    axios.put(`https://localhost:9000/api/notes/${noteId}`)
    .then(response => {
        dispatch({ type: UPDATED_NOTE, payload: response.data });
    })
    .catch(error => {
        dispatch({ type: ERROR_UPDATING_NOTE, payload: error });
    });
};

//  componentDidMount() {
//   this.getNotes();
// }

// getNotes = () => {
//   axios.get('https://killer-notes.herokuapp.com/note/get/all')
//   .then(response => {
//     this.setState({ notes: response.data });
//   })
//   .catch(err => console.log(err));
// }


// handleChange = event => {
//   this.setState({ note: {...this.state.note, [event.target.name]: event.target.value}});
//   };

// handleAddNewNote = event => { 
//   event.preventDefault();
//   console.log("We've got a new note here!");
//   axios.post('https://killer-notes.herokuapp.com/note/create', this.state.note)
//   .then(response => this.setState({ note: response.data }))
// }

// handleDeleteNote = noteId => {
//   axios.delete(`https://killer-notes.herokuapp.com/note/delete/id/${noteId}`)
//   .then(response => this.getNotes());
// }

// goToUpdateNoteForm = note => {
//   console.log("going to update note form!", note);
//   this.setState({ note, updatingNote: true })
//   this.props.history.push('/notesform')
// }

