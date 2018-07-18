import axios from 'axios';


export const GET_NOTES = 'GET_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SAVING_NOTE = 'SAVING_NOTE';
export const SAVED = 'SAVED';


export const getNotes = () => {
    
 return dispatch => {
     dispatch({type: GET_NOTES})
 }
}

export const addNote = (e, note, history) => {
    console.log('adding note...');
    console.log(history);
    e.preventDefault();
    
     return (dispatch) => {
     dispatch({type: SAVING_NOTE});
     setTimeout(()=>{dispatch({type: SAVED})}, 2000);
     setTimeout(()=>{dispatch({type: ADDING_NOTE, payload: note})}, 3000);
     setTimeout(()=>{history.push('/')}, 3200)
    
    }
   
    
}

export const editNotes = (e, savedNote, history) => {
    console.log('updating note...');
    return (dispatch) => {
       dispatch({type: SAVING_NOTE});
       setTimeout(()=>{dispatch({type: SAVED})}, 2000);
       setTimeout(()=>{dispatch({type: EDIT_NOTE, payload: savedNote})}, 4000);
    }
    
    
}