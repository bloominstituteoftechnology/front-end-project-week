export const ADDING = "ADDING";
export const FETCHING = "FETCHING";


export const addNote = input => dispatch => {
    dispatch({type:ADDING,payload:input})
}

export const getNotes = () => dispatch => {
    // dispatch({type:FETCHING,payload:input})
    dispatch({type:FETCHING})
}