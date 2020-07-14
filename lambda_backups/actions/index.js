//actions
import axios from 'axios';

export const FETCHING_NOTES = 'FETCHING_NOTES';
export const NOTES_RECIEVED = 'NOTES_RECIEVED';
export const ERROR = 'ERROR';

export const getNotes = () =>  {
  return function(dispatch){
    dispatch({type: FETCHING_NOTES});
    axios.get('https://killer-notes.herokuapp.com/note/get/all').then(res => {
      dispatch({type: NOTES_RECIEVED, payload: res.data})
    }).catch(err => {
      dispatch({type: ERROR, payload: err})
    })
  }
}
