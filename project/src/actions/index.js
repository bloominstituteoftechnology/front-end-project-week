import axios from 'axios'

export const FETCH_NOTE = 'FETCH_NOTE';
export const FETCHED_NOTE = 'FETCHED_NOTE';
export const ADD_NOTE = 'ADD_NOTE';
export const ADDED_NOTE = 'ADDED_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const EDITED_NOTE = 'EDITED_NOTE';
export const DELETING_NOTE = 'DELETING_NOTE';
export const DELETED_NOTE = 'DELETED_NOTE';
export const SELECT_ID = 'SELECT_ID';
export const ERROR = 'ERROR';

export const fetchNotes = () => {
    const request = axios.get(`http://localhost:3333/notes`)
    return (dispatch) => {
        request.then(({data})=> {
            dispatch({type: FETCH_NOTE, payload: data})
        })
        .then(()=>{
            dispatch({type: FETCHED_NOTE})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
  };
  
export const addNote = note => {
    const request = axios.post(`http://localhost:3333/notes`, note)
    return (dispatch) => {
        request.then(({data})=> {            
            dispatch({type: ADD_NOTE, payload: data})
        })
        .then(()=>{
            dispatch({type: ADDED_NOTE})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
};

export const selectId = id => ({
    type: SELECT_ID,
    id        
})

export const editNote = (id, note) => {
    const request = axios.put(`http://localhost:3333/notes/${id}`, note)
    return (dispatch) => {
        request.then(({data})=> {            
            dispatch({type: EDIT_NOTE, payload: data})
        })
        .then(()=>{
            dispatch({type: EDITED_NOTE})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        });
    };
};

export const deleteNote = id => {    
    const request = axios.delete(`http://localhost:3333/notes/${id}`)
    return (dispatch) => {
        request.then(({data})=> {console.log(data)
            dispatch({type: DELETING_NOTE, payload: data})
        })
        .then(()=>{
            dispatch({type: DELETED_NOTE})
        })
        .catch(err=> {
            dispatch({type: ERROR, error: err})            
        })
    }
}