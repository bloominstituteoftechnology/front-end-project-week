import axios from 'axios';

export const NOTES_FETCH_START = 'NOTES_FETCH_START';
export const NOTES_FETCH_COMPLETE = 'NOTES_FETCH_COMPLETE';
export const NOTES_FETCH_FAILURE = 'NOTES_FETCH_FAILURE';

export const ADD_NOTE_START = 'ADD_NOTE_START';
export const ADD_NOTE_COMPLETE = 'ADD_NOTE_COMPLETE';
export const ADD_NOTE_FAILURE = 'ADD_NOTE_FAILURE';

export const DELETE_NOTE_START = 'DELETE_NOTE_START';
export const DELETE_NOTE_COMPLETE = 'DELETE_NOTE_COMPLETE';
export const DELETE_NOTE_FAILURE = 'DELETE_NOTE_FAILURE';

export const UPDATE_NOTE_START = 'UPDATE_NOTE_START';
export const UPDATE_NOTE_COMPLETE = 'UPDATE_NOTE_COMPLETE';
export const UPDATE_NOTE_FAILURE = 'UPDATE_NOTE_FAILURE';

export const SET_UPDATE_NOTE = 'SET_UPDATE_NOTE';
export const TOGGLE_UPDATE_NOTE = 'TOGGLE_UPDATE_NOTE';
export const SEARCH_NOTE = 'SEARCH_NOTE';
export const SEARCH_NOTE_OFF = 'SEARCH_NOTE_OFF';

export const SORT_NOTES_FRONT = 'SORT_NOTES_FRONT';
export const SORT_NOTES_BACK = 'SORT_NOTES_BACK';

export const getNotes = () => dispatch => {
    dispatch({ type: NOTES_FETCH_START });
    
    axios.get('https://killer-notes.herokuapp.com/note/get/all')
        .then(response => {
            dispatch({ type: NOTES_FETCH_COMPLETE, payload: response.data });
        })
        .catch(err => {
            dispatch({ type: NOTES_FETCH_FAILURE, payload: err });
        });
};

export const addNewNote = note => dispatch => {
    dispatch({ type: ADD_NOTE_START });

    axios.post('https://killer-notes.herokuapp.com/note/create', note)
        .then(() => getNotes()(dispatch))
        .then(() => {
            dispatch({ type: ADD_NOTE_COMPLETE });
        })
        .catch(err => {
            dispatch({ type: ADD_NOTE_FAILURE, payload: err });
        })
};

export const deleteNote = id => dispatch => {
    dispatch({ type: DELETE_NOTE_START });

    axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
        .then(() => getNotes()(dispatch))
        .then(() => {
            dispatch({ type: DELETE_NOTE_COMPLETE });
        })
        .catch( err => {
            dispatch({ type: DELETE_NOTE_FAILURE, payload: err });
        });
};

export const setUpdateNote = id => dispatch => {
    dispatch({ type: SET_UPDATE_NOTE, payload: id });
};

export const updateNote = note => dispatch => {
    dispatch({ type: UPDATE_NOTE_START });
    const nNote = {
        _id: note._id,
        tags: note.tags,
        title: note.title,
        textBody : note.textBody,
    };

    axios.put(`https://killer-notes.herokuapp.com/note/edit/${nNote._id}`, nNote)
        .then(() => getNotes()(dispatch))
        .then(() => {
            dispatch({ type: UPDATE_NOTE_COMPLETE });
        })
        .catch(err => {
            dispatch({ type: UPDATE_NOTE_FAILURE, payload: err });
        });
};

export const toggleUpdateNote = () => dispatch => {
    dispatch({ type: TOGGLE_UPDATE_NOTE });
};

export const searchNote = note => dispatch => {
    dispatch({ type: SEARCH_NOTE, payload: note });
};

export const searchNoteOff = () => dispatch => {
    dispatch({ type: SEARCH_NOTE_OFF });
};

export const sortNotesFront = notes => dispatch => {

    const noteList = notes.sort((a,b) => {return a.title.toLowerCase().localeCompare(b.title.toLowerCase());});
    dispatch({ type: SORT_NOTES_FRONT, payload: noteList});
    getNotes()(dispatch);
}

export const sortNotesBack = notes => dispatch => {

    const noteList = notes.sort((a,b) => {return a.title.toLowerCase().localeCompare(b.title.toLowerCase());}).reverse();
    dispatch({ type: SORT_NOTES_BACK, payload: noteList});
    getNotes()(dispatch);
}