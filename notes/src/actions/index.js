import axios from 'axios';



export const FETCHING = 'FETCHING';
export const FETCHED = 'FETCHED';
export const CREATING = 'CREATING';
export const CREATED = 'CREATED';
export const DELETING = 'DELETING';
export const DELETED = 'DELETED';
export const UPDATING = 'UPDATING';
export const UPDATED = 'UPDATED';
export const ERROR = 'ERROR';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// sorting actions
export const A_Z = 'A_Z';
export const Z_A = 'Z_A';
export const SORT_ID = 'SORT_ID';


export const fetchNotes = () => {
  return dispatch => {
    dispatch({type: FETCHING});

    axios.get('https://fe-notes.herokuapp.com/note/get/all')
         .then(res => {
           dispatch({
              type: FETCHED,
              payload: res.data.reverse()
            })
          })
          .catch(err => {
            dispatch({type: ERROR,payload: err})
          })
    }
}

export const createNote = (note) => {
  return dispatch => {
    dispatch({type: CREATING});

    axios.post('https://fe-notes.herokuapp.com/note/create', note)
         .then(res => {
           dispatch({ type: CREATED})
         })
         .then(() => {
           axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => {
              dispatch({type:FETCHED, payload: res.data.reverse()})
            })
            .catch(err => {
              dispatch({type: ERROR, payload: err})
            })
         })
         .catch(err => {
           dispatch({type: ERROR, payload: err})
        })
  }
}

export const updateNote = (note) => {
  return dispatch => {
    dispatch({type: UPDATING});

    axios.put(`https://fe-notes.herokuapp.com/note/edit/${note.id}`, note)
         .then(res => {
           dispatch({ type: UPDATED})
         })
         .then(() => {
           axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => {
              dispatch({type:FETCHED, payload: res.data.reverse()})
            })
            .catch(err => {
              dispatch({type: ERROR, payload: err})
            })
         })
         .catch(err => {
           dispatch({type: ERROR, payload: err})
        })
  }
}

export const deleteNote = (id) => {
  return dispatch => {
    axios.delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
         .then(res => {
           fetchNotes();
           dispatch({ type: DELETED})
         })
         .then(() => {
           axios.get('https://fe-notes.herokuapp.com/note/get/all')
            .then(res => {
              dispatch({type:FETCHED, payload: res.data.reverse()})
            })
            .catch(err => {
              dispatch({type: ERROR, payload: err})
            })
         })
         .catch(err => {
           dispatch({type: ERROR, payload: err})
        })
  }
}
export const deleteModal = (id) => {
  return dispatch => {
    dispatch({type: DELETING, payload: id});
  }
}

export const closeModal = () => {
  return dispatch => {
    dispatch({type: CLOSE_MODAL})
  }
}
const compareByTitle = (a,b) => {
  return a.title.toLowerCase() > b.title.toLowerCase() ? 1 : -1
}

const compareById = (a,b) => {
  return a.id > b.id ? 1 : -1
}

export const alpha = () => {
  return dispatch => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
     .then(res => {
       let sortedData = res.data.sort(compareByTitle);
       dispatch({type:A_Z, payload: sortedData })
     })
     .catch(err => {
       dispatch({type: ERROR, payload: err})
     })
  }
}

export const alphaReverse = () => {
  return dispatch => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
     .then(res => {
       let sortedData = res.data.sort(compareByTitle).reverse();
       dispatch({type:Z_A, payload: sortedData })
     })
     .catch(err => {
       dispatch({type: ERROR, payload: err})
     })
  }
}

export const sortById = () => {
  return dispatch => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
     .then(res => {
       let sortedData = res.data.sort(compareById);
       console.log(sortedData)
       dispatch({type:SORT_ID, payload: sortedData })
     })
     .catch(err => {
       dispatch({type: ERROR, payload: err})
     })
  }
}

export const search = (term) => {
  return dispatch => {
    axios.get('https://fe-notes.herokuapp.com/note/get/all')
     .then(res => {
       let sortedData = res.data.filter(note => {
         return note.title.includes(term)
       })
       dispatch({type:SORT_ID, payload: sortedData })
     })
     .catch(err => {
       dispatch({type: ERROR, payload: err})
     })
  }
}
