import axios from 'axios';



export const FETCH_NOTES = 'FETCH_NOTES';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';
export const CREATE_NOTE = 'CREATE_NOTE';

export const fetchNotes = () => {
    const getNotes = axios.get("http://localhost:5000/notes/get");
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
 const createNote = axios.post("http://localhost:5000/notes/create", note);
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
  //axios.put(`http://localhost:5000/notes/edit/${id}`, note);
   // return dispatch => {
      //  dispatch(getNotes());
    //}
//} 

//export const deleteNote = id => {
  //  axios.delete(`https://localhost:5000/notes/delete/${id}`);
    //return dispatch => {
      //  dispatch(getNotes());
    //}
//}


