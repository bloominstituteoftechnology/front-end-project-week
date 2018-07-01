import axios from 'axios';
export const DELETE_NOTE = 'DELETE_NOTE';
export const EDIT_NOTE = 'EDIT_NOTE';
export const CREATE_NOTE = 'CREATE_NOTE';
export const FETCH_NOTES = 'FETCH_NOTES';
export const FETCHING_NOTES = 'FETCHING_NOTES';
export const POST_NOTE = 'POST_NOTE';
const keys = require('./config/keys');

const URL = keys.serverURL;

export const deleteNote = (id) => {
    return {
        type: DELETE_NOTE,
        payload: id
    }
}

export const editNote = (noteData) =>    {
    return {
        type: EDIT_NOTE,
        payload: noteData
    }
}

export const createNote = (noteData) => {
    return {
        type: CREATE_NOTE,
        payload: noteData
    }
}

export const fetchNotes = () => {
    const getNotes = axios.get(`${URL}`)//promise
    return function(dispatch) { // instead of our action returning a flat object we are returning a function of dispatch which taps into the api straight from redux
    dispatch({ type: FETCHING_NOTES });
    getNotes
    .then(someData => {
        setTimeout(() => {
        dispatch({type: FETCH_NOTES, payload: someData.data});
        }, 2000);
    })
        .catch(err => {
            console.log(err)
        })
    }
};


export const postNote = (temp) => {
    const myPromise = axios.post(`${URL}`,//promise
    /*return function(dispatch) { // instead of our action returning a flat object we are returning a function of dispatch which taps into the api straight from redux
    //dispatch({ type: FETCHING_NOTES });
    postNote
    .then(someData => {
        console.log('post', someData);
        setTimeout(() => {
        dispatch({type: CREATE_NOTE, payload: someData.data});
        }, 2000);
    })
        .catch(err => {
            console.log(err)
        })
    }*/
   
    {title: temp[temp.length -1].title,
    body: temp[temp.length-1].body}); 
    myPromise
    .then(function (response){ 
    })
    .catch(err => {
      console.error(err);
    });
};




  export const removeNote = (temp) => {

    const myPromise = axios.delete(`${URL}/${temp}`);
    myPromise
      .then(response => {
        //this.setState({ temp: response.data}); 
      })
      .catch(err => {
        console.error(err);
      });
  };

  export const updateNote = (temp) => {
  const myPromise = axios.put(`${URL}/${temp._id}`, {
      title: temp.title,
      body: temp.body
});
  myPromise
    .then(response => {
      //this.setState({ temp: response.data}); 
    })
    .catch(err => {
      console.error(err);
    });
};
  
/*export const fetchNotes = (temp) => {
    const myPromise = axios.get(`${URL}`)
    
    


    myPromise
      .then(response => {
        //this.setState({ temp: response.data}); 
      })
      .catch(err => {
        console.error(err);
      });
  };*/