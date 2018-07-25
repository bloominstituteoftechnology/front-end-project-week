import axios from 'axios';

export const GET_NOTES = 'GET_NOTES';
export const ADD_NOTE = 'ADD_NOTE';
export const VIEW_NOTE = 'VIEW_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';

export const getNotes = notes => ({
    type: 'GET_NOTES',
    payload: notes
});

export const addNewNote = note => ({
    type: 'ADD_NOTE',
    payload: note
});

export const viewSingleNote = id => ({
    type: 'VIEW_NOTE',
    payload: id
})

export const editSingleNote = note => ({
    type: 'EDIT_NOTE',
    payload: note,
})

export const deleteNote = id => {
    axios
        .delete(`http://localhost:5000/view-note/${id}`)
        .then(res => {
            // Need to fill this in!!! possibly link back to home page??
        })
        .catch( err => {
            console.log('error: ', err );
        });
}

