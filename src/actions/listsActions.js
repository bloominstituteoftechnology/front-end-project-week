import axios from 'axios';

export const ERROR = 'ERROR';
export const GET_LISTS = 'GET_LISTS';
export const GETTING_LISTS = 'GETTING_LISTS';
export const CREATING_LIST = 'CREATING_LIST';
export const CREATE_LIST = 'CREATE_LIST';
export const UPDATE_LIST = 'UPDATE_LISTS';
export const DELETE_LIST = 'DELETE_LIST';
export const UPDATING_LIST = 'UPDATING_LIST';
export const DELETING_LIST = 'DELETING_LIST';
export const SINGLE_LIST = 'SINGLE_LIST';
export const GETTING_SINGLE_LIST = 'GETTING_SINGLE_LIST';
export const TOGGLE_UPDATE_LIST = 'TOGGLE_UPDATE_LIST';


export const getLists = () => {
  return (dispatch) => {
    dispatch({ type: GETTING_LISTS })
     const token = localStorage.getItem('jwt');
     //const endpoint = 'http://localhost:5000/api/lists';
        const options = {
       headers: {
        Authorization: token
      }  
     };
    axios
     //  .get('http://localhost:5000/api/notes', options)
      // axios
      // .get('https://fe-notes.herokuapp.com/note/get/all')
     // .get('http://localhost:5000/api/lists')
      .get('https://frontend-william.herokuapp.com/api/lists', options)
      .then(response => {
        dispatch({ type: GET_LISTS, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const createList = (newRec) => {
  return (dispatch) => {
    dispatch({ type: CREATING_LIST })
   axios.post('https://frontend-william.herokuapp.com/api/lists', newRec)
  //  axios.post('http://localhost:5000/api/lists', newRec)
      .then(response => {
        dispatch({ type: CREATE_LIST, payload: response.data })
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }

}

export const updateList = (newList, id) => {
  return (dispatch) => {
    dispatch({ type: UPDATING_LIST })
    const URL = 'https://frontend-william.herokuapp.com/api/lists/' + id;
  // const URL = 'http://localhost:5000/api/lists/' + id;
    axios
      .put(URL, {
        list: newList.list,
        listTitle: newList.listTitle,
        notes_id: 1,
        users_id: 1
      })
      .then(response => {
        dispatch({ type: UPDATE_LIST, payload: response.data })
      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const viewList = (id, notesList) => {
  return (dispatch) => {
    
    dispatch({ type: GETTING_SINGLE_LIST })
     const URL = 'https://frontend-william.herokuapp.com/api/lists/' + id;
   // const URL = 'http://localhost:5000/api/lists/' + id;
    axios
      .get(URL)
      .then(response => {
        dispatch({ type: SINGLE_LIST, payload: response.data })


      })
      .catch(error => {
        dispatch({ type: ERROR, payload: error })
      });
  }
}

export const deleteList = (id) => {
  return (dispatch) => {
    const URL = 'https://frontend-william.herokuapp.com/api/lists/' + id;
   // const URL = 'http://localhost:5000/api/lists/' + id;
    dispatch({ type: DELETING_LIST })
    axios
      .delete(URL)
      .then(response => {
        dispatch({ type: DELETE_LIST, payload: response.data });
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const updateSingleList = note => {
  return {
    type: SINGLE_LIST,
    payload: note
  };
};