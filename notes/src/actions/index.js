export const EDIT_NOTE = 'EDIT_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NOTE = 'DELETE_NOTE';
export const ERROR = 'ERROR';


export const addNote = (title, body, index) => {
    // in this implementation I need to make sure to remember
    // that I am passing the ID on the dom not storing it
    return {
        type: ADD_NOTE,
        payload: {
            title: title,
            body: body
        },
        id: index,
    }
}

export const editNote = (id, newTitle, newBody) => {
    return {
        type: editNote,
        payload: {
            title: newTitle,
            body: newBody,
        }
        
    }
    //need to add the values this needs to pass to the reducer 
}



export const getNotes = () => {
    return (dispatch) => {
        //can i use .then() and .catch() with .get()?
        dispatch({type:FETCHING}).then((response) => {
            // does my syntax need to be different for below??
            dispatch({friends:response.data})
        }).catch(err => {
            dispatch({type:ERROR, error:err})
        })
        // can i just call success for updated friends?
    }
}