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
      dispatch({type: SUCCESS, payload: res.data, fetching: false })
    })
    .catch (err => {
      dispatch({type: ERROR, errorMessage: "Can not find smurfs"})
    })
  }
}



  