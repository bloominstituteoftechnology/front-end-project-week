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
            dispatch(getNotes());
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
            dispatch(getNotes());
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
            dispatch(getNotes());
        })
        .catch(err => {
            dispatch({ type: ERROR, errorMessage: "Trouble Editing Friend"})
        })
    }
}

// NOTE: To prevent having to refresh, add the below to then(response => {*add here*})

// Redux
// dispatch(getNotes());

// React
// axios.get(`https://fe-notes.herokuapp.com/note/get/all`)
//             .then(response => {
//                 dispatch({ type: SUCCESS, notes: response.data })
//             })
//             .catch(err => {
//                 dispatch({ type: ERROR, errorMessage: "Trouble GETTING notes"})
//             })
