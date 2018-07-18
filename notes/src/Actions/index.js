import axios from 'axios';


export const GET_NOTES = 'GET_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';


export const getNotes = () => {
    const serverNotes = axios.get('https://killer-notes.herokuapp.com/note/get/all')
 return dispatch => {
     dispatch({type: GET_NOTES})
 }
}

export const addNote = (e, note, history) => {
    console.log('adding note...');
    console.log(history);
    e.preventDefault();
    
     return (dispatch) => {
     dispatch({type: ADDING_NOTE, payload: note});
     setTimeout(history.push('/'), 2000);
    
    }
   
    
}

export const editNotes = (e, savedNote, history) => {
    console.log('updating note...');
    return (dispatch) => {
       dispatch({type: EDIT_NOTE, payload: savedNote}) 
    }
    
    
}