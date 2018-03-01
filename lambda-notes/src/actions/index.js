import axios from 'axios';
export const FETCH_POSTS = 'FETCH_POSTS';
export const CREATE_POST = 'CREATE_POST';
export const FETCH_POST = 'FETCH_POST';
export const DELETE_POST = 'DELETE_POST';


const ROOT_URL = 'http://reduxblog.herokuapp.com/api';
const API_KEY = '?key=Theurgist1001';

export const fetchPosts = () => {
  const request = axios.get(`${ROOT_URL}/posts${API_KEY}`);
  return dispatch => 
    request
    .then(payload => {
      dispatch({ type: FETCH_POSTS, payload: payload.data});
    })
    .catch(err => {
      console.log('Error: ', err);
    });
  };

export const createPost = (values, callback) => {
  const request = axios.post(`${ROOT_URL}/posts${API_KEY}`, values)
  return dispatch => {
    request
    .then(request  => {
        dispatch({ type: CREATE_POST, payload: request.data });
      })
      .then(() => callback())
      .catch(err => {
        console.log('Error: ', err);
      });
  };
};

export const fetchPost = (id) => {
   const request = axios.get(`${ROOT_URL}/posts/${id}${API_KEY}`);
   return dispatch => {
     request
      .then( request  => {
        dispatch({ type: FETCH_POST, payload: request.data });
      });
  };
}
  
  export const deletePost = (id, callback) => {
    const request = axios.delete(`${ROOT_URL}/posts/${id}${API_KEY}`)
    return dispatch => {
      request
        .then( request => {
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