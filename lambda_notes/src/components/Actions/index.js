import axios from 'axios';

export const LOADING = "LOADING" ;
export const SUCCESS = "SUCCESS";
export const NOTE = "NOTE"
export const ERROR = "ERROR";



export const getNotes = () => {
  console.log("")
  return (dispatch) => {
    dispatch({type: LOADING, fetch: true})
    axios.get(`http://localhost:4500/api/notes`)
    .then( res => {
      dispatch({ type: SUCCESS, payload: res.data, path: "List View" , fetching: false })
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Notes Not Found!"})
    })
  }
}

export const getNote = (id) => {
  return (dispatch) => {
    dispatch({type: LOADING, fetching: true})
    axios.get(`http://localhost:4500/api/note/${id}`)
    .then( res => {
      dispatch({type: NOTE, payload: res.data, path: "Note View", fetching: false})
    })
    .catch (err => {
      dispatch({type: ERROR, path: "Note View", errorMessage: err})
    })
  }
}

//connected to my local server
export const newNote = (note) => {
  return (dispatch) => {
    axios.post(`http://localhost:4500/api/notes`, note)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, path: "Create Note" , fetching: false })
    })
    .catch (err => { 
      dispatch({type: ERROR, errorMessage: "Notes Not Found!"})
    })
  }
}

export const editNote = (id, note) => {
  console.log("------edit note id--------", id, note);
  return (dispatch) => {
    axios.put(`http://localhost:4500/api/note/edit/${id}`, note)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, path: "Edit Note", fetching: false})
    })
      
      .catch(err => {
      
      dispatch({type: ERROR, errorMessage: "Notes Not Found!"})
      })
  }
}

export const deleteNote =(id)=> {
  return (dispatch) => {
    axios.delete(`http://localhost:4500/api/note/delete/${id}`)
    .then( res => {
      dispatch({type: SUCCESS, payload: res.data, fetching: false})
    })
    .catch( err => {
      dispatch({type: ERROR, errorMessage: "Notes Not Found!"})
    })
  }
}
