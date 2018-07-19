import axios from 'axios';


export const GET_NOTES = 'GET_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SAVING_NOTE = 'SAVING_NOTE';
export const SAVED = 'SAVED';
export const THEME_SWITCH = 'THEME_SWITCH';


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

export const themeSwitch = (nightVision) => {
    console.log('switching themes');
    //passes in nightVision as payload
    if(nightVision === false){  //then we are switching it to true
    return ({type: THEME_SWITCH, payload: {primary: 'black', secondary: '#B3FFAB'}})
    } else {
    return ({type: THEME_SWITCH, payload: {primary: 'white', secondary: 'black'}})
    }
}