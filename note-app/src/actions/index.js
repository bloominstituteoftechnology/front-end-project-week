import {GETTING_NOTES, ADDING_NOTE, UPDATING_NOTE, DELETING_NOTE, GOT_NOTES} from '../reducers'
import {store} from '../index'



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
    store.dispatch({
      type: ADDING_NOTE,
      payload: note
  })
}
export const updatingNote = (id, note) => {
    store.dispatch({
      type: UPDATING_NOTE,
      paylaod: {id, note}
  })
}
export const deletingNote = id => {
    store.dispatch({
      type: DELETING_NOTE,
      payload: id
  })
}