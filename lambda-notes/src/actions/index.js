import axios from 'axios';



export const FETCH_NOTES = 'FETCH_NOTES';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CREATE_NOTE = 'CREATE_NOTE';

export const fetchNotes = () => {
    const getNotes = axios.get("https://killer-notes.herokuapp.com/note/get/all");
    return dispatch => {
        dispatch({ type: FETCH_NOTES });
        getNotes
        .then(response => {
          dispatch({
            type: SUCCESS,
            payload: response.data
          });
        })
        .catch(error => {
          dispatch({
            type: ERROR,
            payload: "Your Notes are Hiding!"
          });
        });
      };
        
    };

export const addNote = note => {
 const createNote = axios.post("https://killer-notes.herokuapp.com/note/create", note);
  return  dispatch => {
    dispatch({ type: CREATE_NOTE})
    createNote
    .then(response => {
      console.log(response.data);
      dispatch({ type: SUCCESS, payload: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, payload: 'No Note Added' })
    })
  }
}

//export const noteEdit = (note, id) => {
  //axios.put("https://killer-notes.herokuapp.com/note/edit/id", note);
   // return dispatch => {
      //  dispatch(getNotes());
    //}
//} 

//export const deleteNote = id => {
  //  axios.delete("https://killer-notes.herokuapp.com/note/delete/id");
    //return dispatch => {
      //  dispatch(getNotes());
    //}
//}


