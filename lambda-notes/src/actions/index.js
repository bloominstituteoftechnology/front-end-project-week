import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';

export const ERROR_FETCHING_POSTS = 'ERROR_FETCHING_POSTS';
export const IS_FETCHING = 'IS_FETCHING';
export const IS_SAVING = 'IS_SAVING';
export const ERROR_SAVING_POST = "ERROR_SAVING_POST";
export const IS_DELETING = 'IS_DELETING';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Theurgist1001';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return dispatch => {
    dispatch({ type: IS_FETCHING });
    request
    .then(({ data }) => {
      dispatch({ type: FETCH_POSTS, payload: request });
    })
    .catch(err => {
      dispatch({ type: ERROR_FETCHING_POSTS, payload: err });
    });
  };
};

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  return dispatch => {
    dispatch({ type: IS_SAVING });
    request
    .then(({ request }) => {
        dispatch({ type: CREATE_POST, payload: request });
      })
      .then(() => callback())
      .catch(err => {
        dispatch({ type: ERROR_SAVING_POST, payload: err });
      });
  };
};

export const fetchPost = (id) => {
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
   return dispatch => {
     dispatch({ type: IS_FETCHING });
     request
      .then(({ request }) => {
        dispatch({ type: FETCH_POST, payload: request });
      });
  };
}
  
  export const deletePost = (id, callback) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    return dispatch => {
      dispatch({ type: IS_DELETING });
      request
        .then(({ request }) => {
          dispatch({ type: DELETE_POST, payload: id});
        })
        .then(() => callback());
  };
};


// export const fetchPosts = () => {
// const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);

//    return {
//     type: FETCH_POSTS,
//     payload: request
//    };
// }

// export const createPost = (values, callback) => {
//   const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
//     .then(() => callback());

//   return {
//     type: CREATE_POST,
//     payload: request
//   };
// }

// export const fetchPost = (id) => {
//   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);

//   return {
//     type: FETCH_POST,
//     payload: request
//   };
// }

// export const deletePost = (id, callback) => {
//   const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
//   .then(() => callback());

//   return {
//     type: DELETE_POST,
//     payload: id
//   };
// }