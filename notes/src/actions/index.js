import axios from 'axios';
export const FETCHINGNOTES='FETCHINGNOTES';
export const FETCHEDNOTES='FETCHEDNOTES';
export const FETCHINGNOTE='FETCHINGNOTE';
export const FETCHEDNOTE='FETCHEDNOTE';
export const ERROR='ERROR';
export const ADDINGNOTE='ADDINGNOTE';
export const ADDEDNOTE='ADDEDNOTE';
export const DELETINGNOTE='DELETINGNOTE';
export const DELETEDNOTE='DELETEDNOTE';
export const UPDATINGNOTE='UPDATINGNOTE';
export const UPDATEDNOTE='UPDATEDNOTE';

export const getNotes=()=>{
  const request=axios.get('https://killer-notes.herokuapp.com/note/get/all');
  return function (dispatch){
    dispatch({type:'FETCHINGNOTES'});
    request.then(data=>{dispatch({type:'FETCHEDNOTES',payload:data.data})})
    .catch(err=>dispatch({type:'ERROR',payload:err}));
  }
}
export const getSingleNote=(id)=>{
    const request=axios.get(`https://killer-notes.herokuapp.com/note/get/${id}`);
    return function (dispatch){
        dispatch({type:'FETCHINGNOTE'});
        request.then(data=>{dispatch({type:'FETCHEDNOTE',payload:data.data})})
        .catch(err=>dispatch({type:'ERROR',payload:err}));
      }
}
export const addNote=(newNote,history)=>{
  const request=axios.post('https://killer-notes.herokuapp.com/note/create',newNote);
  return function (dispatch){
    dispatch({type:'ADDINGNOTE'});
    request.then(data=>{dispatch({type:'ADDEDNOTE'});history.push('/notes')})
    .catch(err=>dispatch({type:'ERROR',payload:err}));
}
}
export const deleteNote=(id,history)=>{
  const request= axios.delete(`https://killer-notes.herokuapp.com/note/delete/${id}`);
  return function (dispatch) {
    dispatch({type:'DELETINGNOTE'});
    request.then(data=>{dispatch({type:'DELETEDNOTE'});history.push('/notes')})
    .catch(err=>dispatch({type:'ERROR',payload:err}));
  }
}
export const updateNote=(id,editedNote,history)=>{
  const request=axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`,editedNote)
  return function (dispatch) {
    dispatch({type:'UPDATINGNOTE'});
    request.then(data=>{dispatch({type:'UPDATEDNOTE'});history.push('/notes')})
    .catch(err=>dispatch({type:'ERROR',payload:err}));
  }
}