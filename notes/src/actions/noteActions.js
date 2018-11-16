import axios from 'axios';
export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"


export const getNotes = () => {
    return (dispatch) => {
        dispatch({type:LOADING})
        axios.get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
            dispatch({type:SUCCESS, notes:response.data})
        })
        .catch(err => {
            dispatch({type:ERROR, errorMessage:"Trouble getting your Notes! Try Again"})
        })
    }
}