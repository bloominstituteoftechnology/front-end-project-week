import axios from "axios"

export const ADDING = "ADDING";
export const FETCHING = "FETCHING";
export const GETTING = "GETTING"
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";
export const ERROR = "ERROR";

export const getNotes = () => dispatch => {
    dispatch({type:FETCHING})
    axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
        console.log("GETTING",response)
        dispatch({type:GETTING,payload:response.data})
    })
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
    })
}

const followUpRes = ({dispatch,response}) =>  {
    // const dispatch = comb.dispatch
    // const response = comb.res
    console.log("Follow-up GET request to retreive data after POST/PUT/DELETE request",`Status: ${response.status}`)
        dispatch({type:FETCHING})
        axios
        .get("https://fe-notes.herokuapp.com/note/get/all")
        .then(response => {
            console.log("GETTING",response)
            dispatch({type:GETTING,payload:response.data})
        })
        .catch(error => {
            console.log(error)
            dispatch({type:ERROR,payload:error})
        })
}

export const addNote = input => dispatch => {
    dispatch({type:FETCHING})
    axios
    .post("https://fe-notes.herokuapp.com/note/create",input)
    .then(response => {
        console.log(response)
        dispatch({type:ADDING})
        return {dispatch:dispatch,response:response}
    })
    .then(val => followUpRes(val))
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
    })
}

export const editNote = input => dispatch => {
    dispatch({type:FETCHING})
    axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${input._id}`,input)
    .then(response => {
        console.log(response)
        dispatch({type:UPDATING})
        return {dispatch:dispatch,response:response}
    })
    .then(val => followUpRes(val))
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
    })
}

export const deleteNote = input => dispatch => {
    dispatch({type:FETCHING})
    axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${input}`)
    .then(response => {
        console.log(response)
        dispatch({type:DELETING,payload:response.data})
        return {dispatch:dispatch,response:response}
    })
    .then(val => followUpRes(val))
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
    })
}
