export const ADDING = 'ADDING';
export const ERROR = 'ERROR';

export const createNote = note =>{
    return dispatch =>{
        dispatch({type:ADDING, payload: note})
    }
}