import axios from 'axios'

export const LOADING = "LOADING"
export const SUCCESS = "SUCCESS"
export const ERROR = "ERROR"

//GET
export const getNotes = () => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                dispatch({ type: SUCCESS, notes: response.data })
            })
            .catch(err => {
                dispatch({ type: ERROR, errorMessage: "Trouble GETTING notes"})
            })
    }
}

//POST
export const createNote = note => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios
        .post(`https://fe-notes.herokuapp.com/note/create`, note) 
        //.then(this.getNotes)
        .then(response => {
            //dispatch({ type: SUCCESS, notes: response.data })
            axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(err => {
                console.log("Fail to GET notes from server", err)
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble CREATING a note"})
        })
    }
}

//DELETE
export const deleteNote = id => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios 
        .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
        //.then(this.getNotes)
        .then(response => {
            //dispatch({ type: SUCCESS, notes: response.data })
            axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(err => {
                console.log("Fail to GET notes from server", err)
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Deleting Friend"})
        })
    }
}


//PUT
export const updateNote = theupdatedNote => {
    return (dispatch) => {
        dispatch({ type: LOADING })
        axios 
        .put(`https://fe-notes.herokuapp.com/note/edit/${theupdatedNote.id}`, theupdatedNote)
        .then(response => {
            //dispatch({ type: SUCCESS, notes: response.data })
            axios
            .get(`https://fe-notes.herokuapp.com/note/get/all`)
            .then(response => {
                this.setState({ notes: response.data })
            })
            .catch(err => {
                console.log("Fail to GET notes from server", err)
            })
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Editing Friend"})
        })
    }
}



// handleUpdateNote = updatedNote => {
//     axios 
//     .put(`https://fe-notes.herokuapp.com/note/edit/${updatedNote.id}`, updatedNote)
//     .then(response => {
//       //this.setState({ notes: response.data })
//       console.log(response.data)
//             axios
//             .get(`https://fe-notes.herokuapp.com/note/get/all`)
//             .then(response => {
//                 this.setState({ notes: response.data })
//             })
//             .catch(err => {
//               console.log("Fail to GET notes from server", err)
//             })
//     })
//     .catch(err => {
//       console.log("Fail to UPDATE a note", err)
//     })
//   }