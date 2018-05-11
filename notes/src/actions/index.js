import axios from 'axios';
export const SUCCESS = 'SUCCESS';
export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';
export const FETCHING = 'FETCHING';



export const getNotes = () => {
    return (dispatch) => {
        axios.get('http://localhost:3333/noteslist')
        .then((response) => {
            console.log(response.data)
            dispatch({type:SUCCESS, notes:response.data})
        })
        .catch(error => {console.log(error)})
    }
}

//****need a function that forms the "note" to be passed to these functions

export const addNote = (note) => {
    // in this implementation I need to make sure to remember
    // that I am passing the ID on the dom not storing it
    return (dispatch) => {
    
            dispatch({type:FETCHING})
            axios.post('http://localhost:3333/noteslist', note)
            .then((response) => {
                dispatch({type:ADD_NOTE, notes:response.data})
            
            })
            .catch(error => {console.log(error)});
}
}
export const editNote = (note) => {
    return (dispatch) => {
        dispatch({type: FETCHING})
        axios.put(`http://localhost:3333/note/${note.id}`, note)
        .then((response) => {
            dispatch({type:SUCCESS, notes: response.data})
        })
    }
}


//need to pass the whole object
// export const editNote = (note) => {
//     return (dispatch) => { 
//         dispatch({type: FETCHING});
//         //might need to modify
//         axios.put(`http://localhost:3333/note/${note.id}`, note)
//         .then((response) => {
//             console.log(response);
//             dispatch({type:SUCCESS, note: response.data})

//         }  
    
    




