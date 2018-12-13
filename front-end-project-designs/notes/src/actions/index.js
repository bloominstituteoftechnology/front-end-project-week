import axios from "axios";
export const ADD_NOTE = "ADD_NOTE";
export const EDIT_NOTE = "EDIT_NOTE";
export const DELETE_NOTE = "DELETE_NOTE";
export const FETCHING_NOTES = "FETCHING_NOTE";
export const NOTES_FETCHED = "NOTE_FETCHED";
export const NOTES_FETCH_FAIL = "NOTE_FETCH_FAIL";
export const FETCH_SINGLE="FETCH_SINGLE";


export const fetchNotes = () => dispatch => {
  dispatch({ type: FETCHING_NOTES });
  axios
    .get("https://quan-back-end.herokuapp.com/api/notes")
    .then(response => {
      console.log(response);
      dispatch({ type: NOTES_FETCHED, payload: response.data });
    })
    .catch(error => {
      dispatch({ type: NOTES_FETCH_FAIL, payload: error });
    });
};
export const addNote=(newNote)=>dispatch =>{
  axios
    .post("https://quan-back-end.herokuapp.com/api/notes",newNote)
    // .then(response => {
    //   console.log(response);
    //   dispatch({NOTES_FETCHED, payload:response.data})
    // })
}
export const deleteNote=(id)=>dispatch=>{
  axios
    .get(`https://quan-back-end.herokuapp.com/api/notes/delete/${id}`)
    .then(response => {
      dispatch({ type: DELETE_NOTE });
      
    })
}
export const fetchSingle=(id)=>dispatch=>{
  axios
    .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
    .then(response=>{
      dispatch({type: FETCH_SINGLE, payload: response.data})
    })
}
export const editNote= (id,updatedNote)=>dispatch=>{
  axios
    .put(`https://quan-back-end.herokuapp.com/api/notes/${id}`,updatedNote)
    .then(response=>{
      dispatch({type:EDIT_NOTE, payload: {id, ...response.data}})
    })
}