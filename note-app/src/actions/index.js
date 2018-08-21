import {GETTING_NOTES, ADDING_NOTE, UPDATING_NOTE, DELETING_NOTE, GOT_NOTES, ADDED_NOTE, UPDATED_NOTE, DELETED_NOTE} from '../reducers'
import {store} from '../index'
import axios from 'axios' 


export const fetchingNotes = () => {
    const promise = axios.get('http://localhost:8080/notes')
    return (dispatch) => {
        dispatch({type:GETTING_NOTES})
        promise.then( response => {
            dispatch({type:GOT_NOTES, payload: response.data})
        })
        .catch(error => {
            dispatch({type:ERROR, error})
        })
    }
}

export const addingNote = note => {
    const promise = axios.post('http://localhost:8080/notes', noteobj)
    return (dispatch) => {
      dispatch({type:ADDING_NOTE})
      promise.then( response => {
          dispatch({type:ADDED_NOTE, payload: response.data})
      })
      .catch(error => {
          dispatch({type:ERROR})
      })
    }
}

export const updatingNote = (id, note) => {
    const promise = axios.put(`http://localhost:8080/notes/${id}`, note)
    return dispatch => {
      dispatch({type:UPDATING_NOTE})
      promise.then( response => {
        dispatch({type: UPDATED_NOTE, payload:response.data})
        // may have to call on the fetcher 
      })
      .catch(error => {
          dispatch({type:ERROR, error})
      })
    }
    
    
}

deleteNote  = (index) => {
    const promise = axios.delete(`http://localhost:8080/notes/${index}`)
    promise
    .then(response => {
      console.log(response)
      this.fetchNotes()
    })
    .catch(error => {
      console.log(error, index) 
    })

  }

export const deletingNote = id => {
    const promise = axios.delete(`http://localhost:8080/notes/${id}`)
    return dispatch => {
        dispatch({type:DELETING_NOTE})
        promise.then(response => {
            dispatch({type:DELETED_NOTE, payload: response.data})
        })
        .catch(error => {
            dispatch({type:ERROR, error})
        })
        
    }
}