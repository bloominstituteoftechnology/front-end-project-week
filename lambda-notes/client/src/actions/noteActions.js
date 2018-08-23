import axios from 'axios'

export const FETCHED_NOTE = 'FETCHED_NOTE';
export const FETCHING_NOTE = 'FETCHING_NOTE';
export const ERROR_FETCHING_NOTE = 'ERROR_FETCHING_NOTE'

export const ADD_NOTE = 'ADD_NOTE'







export const getNote = () =>{
    return dispatch => {
        dispatch({ type : FETCHING_NOTE });
            axios.get('http://localhost:8000/api/notes')
                .then(response => {
                    dispatch({ type : FETCHED_NOTE , payload : response.data })
                })
                .catch(err => {
                    dispatch( { type : ERROR_FETCHING_NOTE , payload : err})
                })
    }
}

export const addNote = ( note ) =>{
    return dispatch => {
            axios.post('http://localhost:8000/api/notes', note)
                .then( response => {
                     if(response){

                     }
                })
                .catch( error => {

                })

            
    }
}
