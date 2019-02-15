import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';

export const CURRENT_NOTE = 'CURRENT_NOTE';
export const APP_HEIGHT = 'APP_HEIGHT';

export const fetchNotes = ()=>{
    return dispatch=>{
        dispatch({type: FETCHING});
        //axios.get('https://fe-notes.herokuapp.com/note/get/all')
        axios.get('https://ericsnotesbackend.herokuapp.com/api/notes')
        .then(response=>{
            dispatch({
                type: SUCCESS,
                notes: response.data.notes
            })
        })
        .catch(error=>{
            // TODO: Add error element to dom
            dispatch({
                type: ERROR,
                errorMessage: 'Failed to load notes'
            })
        })
    }
}

export const addNote = (note, notes)=>{
    return dispatch=>{
        dispatch({type: FETCHING});
        //axios.post('https://fe-notes.herokuapp.com/note/create', note)
        axios.post('https://ericsnotesbackend.herokuapp.com/api/notes', note)
        .then(response=>{
            const newNote = Object.assign({}, note, {'id': response.data.id});
            const newNotes = notes;
            newNotes.push(newNote);
            dispatch({
                type: SUCCESS,
                notes: newNotes
            })
        })
        .catch(error=>{
            dispatch({
                type: ERROR,
                errorMessage: 'Failed to create note'
            })
        })
    }
}

export const deleteNote = (id, notes)=>{
    return dispatch=>{
        dispatch({type: FETCHING});
        //axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        axios.delete(`https://ericsnotesbackend.herokuapp.com/api/notes/${id}`)
        .then(response=>{
            const index = notes.findIndex(note=>note.id===id);
            const newNotes = [...notes.slice(0, index), ...notes.slice(index + 1)];
            dispatch({
                type: SUCCESS,
                notes: newNotes
            })
        })
        .catch(error=>{
            dispatch({
                type: ERROR,
                errorMessage: 'Failed to delete note'
            })
        })
    }
}
export const editNote = (id, note, notes)=>{
    return dispatch=>{
        dispatch({type: FETCHING});
        //axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
        axios.put(`https://ericsnotesbackend.herokuapp.com/api/notes/${id}`, note)
        .then(response=>{
            const index = notes.findIndex(note=>note.id===id)
            const newNotes = notes;
            newNotes[index] = response.data.note;
            dispatch({
                type: SUCCESS,
                notes: newNotes
            })
            dispatch({
                type: CURRENT_NOTE,
                currentNote: newNotes[index]
            })
        })
        .catch(error=>{
            dispatch({
                type: ERROR,
                errorMessage: 'Failed to update note'
            })
        })
    }
}

export const setCurrentNote = note=>{
    return{
        type: CURRENT_NOTE,
        currentNote: note
    }
}
