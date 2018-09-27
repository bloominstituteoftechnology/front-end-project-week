export const ADDING = 'ADDING';
export const ERROR = 'ERROR';
export const VIEWING = 'VIEWING';
export const HOME = 'HOME';
export const EDITING = 'EDITING';
export const UPDATING = 'UPDATING';
export const DELETING = 'DELETING';


export const createNote = note =>{
    return dispatch =>{
        dispatch({type:ADDING, payload: note})
    }
}

export const viewNote = index =>{
    return dispatch =>{
        dispatch({type:VIEWING, payload: index})
    }
}

export const goHome = () =>{
    return dispatch =>{
        dispatch({type: HOME})
    }
}

export const editNote = index =>{
    return dispatch =>{
        dispatch({type:EDITING, payload: index})
    }
}

export const updateNote = notes =>{
    return dispatch =>{
        dispatch({type:UPDATING, payload:notes})
    }
}

export const deleteNote = notes =>{
    return dispatch =>{
        dispatch({type:DELETING, payload: notes})
    }
}