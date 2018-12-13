import axios from "axios"

export const ADDING = "ADDING";
export const FETCHING = "FETCHING";
export const GETTING = "GETTING"
export const UPDATING = "UPDATING";
export const DELETING = "DELETING";
export const ERROR = "ERROR";

export const getNotes = () => dispatch => {
    dispatch({type:FETCHING})
    return(axios
    .get("https://fe-notes.herokuapp.com/note/get/all")
    .then(response => {
        console.log("GETTING",response)
        dispatch({type:GETTING,payload:response.data})
        return true
    })
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
        return false
    }))
    
}
export const addNote = input => dispatch => {
    dispatch({type:FETCHING})
    return (axios
    .post("https://fe-notes.herokuapp.com/note/create",input)
    .then(response => {
        console.log("ADDING",response)
        dispatch({type:ADDING})
        return true
    })
    .then()
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
        return false
    }))
}

export const editNote = input => dispatch => {
    dispatch({type:FETCHING})
    return (axios
    .put(`https://fe-notes.herokuapp.com/note/edit/${input._id}`,input)
    .then(response => {
        console.log(response)
        dispatch({type:UPDATING})
        return true
    })
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
        return false
    })
    )
}

export const deleteNote = input => dispatch => {
    dispatch({type:FETCHING})
    console.log(`https://fe-notes.herokuapp.com/note/delete/${input}`)
    return (axios
    .delete(`https://fe-notes.herokuapp.com/note/delete/${input}`)
    .then(response => {
        console.log(response)
        dispatch({type:DELETING,payload:response.data})
        return true
    })
    .catch(error => {
        console.log(error)
        dispatch({type:ERROR,payload:error})
        return false
    }))
}

