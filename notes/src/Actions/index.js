import axios from 'axios';
import firebase from '../firebase';


const database = firebase.database();

export const GET_NOTES = 'GET_NOTES';
export const ADDING_NOTE = 'ADDING_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const SAVING_NOTE = 'SAVING_NOTE';
export const SAVED = 'SAVED';
export const THEME_SWITCH = 'THEME_SWITCH';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DONE_SAVING = 'DONE_SAVING';


export const getNotes = () => {
 return dispatch => {
     dispatch(()=> {
    let notesRef = firebase.database().ref('notes');
    notesRef.on('value', snapshot => {
      // console.log(snapshot.val())
      let dataArray = Object.values(snapshot.val());
     console.log('snapshot', [snapshot.val()]);
     console.log('dataArray', dataArray);
     dispatch({type: GET_NOTES, payload: dataArray})
    })
     })
 }
}

export const addNote = (e, note, history) => {
    console.log('adding note...');
    console.log(history);
    e.preventDefault();
    
     return (dispatch) => {
     dispatch({type: SAVING_NOTE})
     dispatch(()=>{
         let id = Date.now();
         database.ref('notes/'+id).set({
         title: note.title,
         id: id,
         content: note.content
     })});
     setTimeout(()=>{dispatch({type: SAVED})}, 1000);
     setTimeout(()=>{dispatch({type: DONE_SAVING})}, 2000);
     setTimeout(()=>{history.push('/')}, 2000)
    
    }
   
    
}

export const editNotes = (e, savedNote, history) => {
    console.log('updating note...');
    return (dispatch) => {
       dispatch({type: SAVING_NOTE});
        dispatch(()=>{
         database.ref('notes/'+savedNote.id).set({
         title: savedNote.title,
         id: savedNote.id,
         content: savedNote.content
     })});
       setTimeout(()=>{dispatch({type: SAVED})}, 2000);
       setTimeout(()=>{dispatch({type: EDIT_NOTE, payload: savedNote})}, 4000);
    setTimeout(()=>{history.push('/')}, 3200)
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

export const deleteNote = (e, id, history) => {
    e.preventDefault();
 console.log('deleting note');
 return (dispatch) => {
      dispatch(() =>{
      database.ref('notes/' + id).remove();
      })

     setTimeout(()=>{history.push('/')}, 500)

 }
}