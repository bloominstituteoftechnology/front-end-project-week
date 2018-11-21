import axios from 'axios';

export const LOADING = 'LOADING'
export const SUCCESS = 'SUCCESS'
export const FAILURE = 'FAILURE'

export const fetchNotes = () =>{
    return dispatch=>{
      dispatch({ type: LOADING, payload: `SHHH..... Wait while we copy your notes!`});
      axios
        .get('https://fe-notes.herokuapp.com/note/get/all')
        .then(response =>{
          dispatch({ type: SUCCESS, payload: response.data })
        })
        .catch(err =>{
          dispatch({ type:FAILURE, payload:'I swear my dog ate your notes..'})
        })
    }
  }

export const addNewNote = (newNote) =>{
  return dispatch=>{
      dispatch({ type: LOADING, payload:`let's see what you've got here...`})
      axios
        .post('https://fe-notes.herokuapp.com/note/create', newNote)
        .then(response =>{
            dispatch( fetchNotes() )
        })
        .catch(err =>{
          dispatch({ type: FAILURE, payload: 'This note is un acceptable'})
        })
  }
}

export const updatedNote = (id, note)=>{
  return dispatch=>{
    dispatch({ type: LOADING, payload: 'We are running outta ink!'})
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, note)
        .then( response =>{
         dispatch( fetchNotes() )
        })
        .catch(err => 
          dispatch({type: FAILURE, payload: 'Why you changing it now?'}))
  }
}

export const deleteNote = (id) =>{
  return dispatch=>{
    dispatch({ type: LOADING, payload: 'Sending your note to the schredder...'})
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response =>{
        dispatch( fetchNotes() )
      })
      .catch(err =>{
        dispatch({ type: FAILURE, payload: 'Your note clogged the shredder!'})
      })
  }
 
}