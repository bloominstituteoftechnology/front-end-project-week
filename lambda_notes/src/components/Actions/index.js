import axios from 'axios';

export const LOADING = "LOADING" ;
export const SUCCESS = "SUCCESS";
export const ERROR = "ERROR";



export const getNotes = () => {
  return(dispatch) => {
    dispatch({type: LOADING})
    axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, fetching: false})
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Notes Not Found!"})
    })
  }
}

export const newNote = (note) => {
  return (dispatch) => {
    axios.post(`https://fe-notes.herokuapp.com/note/create`, note)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, path: "Create Note" , fetching: false })
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Can not find smurfs"})
    })
  }
}

export const editNote = (id, note) => {
  return (dispatch) => {
    axios.put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, path: "Edit Note", fetching: false})
    })
    .catch( err => {
        throw new Error(err);
    })
  }
}

export const deleteNote =(id)=> {
  return (dispatch) => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, fetching: false})
    })
    .catch( err => {
        throw new Error(err);
    })
  }
}
