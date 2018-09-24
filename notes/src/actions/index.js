import axios from 'axios';

export const FETCHING_POSTS = 'FETCHING_POSTS';
export const FETCHING_POST = 'FETCHING_POST';
export const POST_FETCHED = 'POST_FETCHED';
export const POSTS_FETCHED = 'POSTS_FETCHED';
export const CREATING_POST = 'CREATING_POST';
export const POST_CREATED = 'POST_CREATED';
export const CONFIRM_DELETE = 'CONFIRM_DELETE';
export const CANCEL_DELETE = 'CANCEL_DELETE';
export const DELETING_POST = 'DELETING_POST';
export const ERROR = 'ERROR';

const URL = 'https://js-lambda-note.herokuapp.com/api/notes';

export const fetchPosts = () => {
  return function(dispatch) {
    dispatch({ type: FETCHING_POSTS});

    axios.get(URL)
          .then(res => dispatch({ type: POSTS_FETCHED, payload: res.data }))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
};

export const fetchPost = id => {
  return function(dispatch) {
    dispatch({ type: FETCHING_POST});

    axios.get(URL + `/${id}`)
          .then(res => dispatch({ type: POST_FETCHED, payload: res.data }))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const createPost = note => {
  return function(dispatch) {

    axios.post(URL, note)
          .then(res => dispatch(fetchPosts()))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const editPost = (id, note) => {
  return function(dispatch) {
    axios.put(URL + `/${id}`, note)
          .then(res => dispatch(fetchPosts()))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const deletePost = id => {
  return function(dispatch) {
    dispatch({ type: DELETING_POST });
    axios.delete(URL + `/${id}`)
          .then(res => dispatch(fetchPosts()))
          .catch(err => dispatch({ type: ERROR, payload: err }));
  }
}

export const confirmDelete = () => {
  return {
    type: CONFIRM_DELETE
  }
}

export const cancelDelete = () => {
  return {
    type: CANCEL_DELETE
  }
}
