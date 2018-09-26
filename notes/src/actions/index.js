export const ADDING = 'ADDING';
export const ERROR = 'ERROR';
export const VIEWING = 'VIEWING';

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