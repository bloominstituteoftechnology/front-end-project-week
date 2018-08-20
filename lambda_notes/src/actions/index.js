import axios from 'axios';

//Declare action type const
import * as types from './types';

export const fetchNotes = () => {
    const request = axios.get('http://localhost:8000/api/notes')
    console.log(request);
    return (dispatch) => {
        dispatch({type: types.FETCHING_NOTES})
        console.log(request);
        request.then(response => dispatch({
            type: types.NOTES_FETCHED,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}

export const fetchSingleNote = (id) => {
    return (dispatch) => {
        axios.get(`http://localhost:8000/api/notes/${id}`)
        .then(response => dispatch({
            type: types.FETCH_SINGLE_NOTE,
            payload: response.data
        }))
        .catch(err => dispatch({
            type: types.FETCH_ERROR,
            error: err
        }))
    }
}

// export const deleteNote = (id) => {
//     const request = axios.delete(`http://localhost:8000/api/notes/${id}`)
//     return (dispatch) => {        
//         request.then(res => {
//             if (res.data.success) {
//                 axios.get('http://localhost:8000/api/notes')
//                 .then(res2 => dispatch({
//                     type: types.DELETE_NOTE,
//                     payload: res2.data
//                 }))
//                 .catch(err => dispatch({
//                     type: types.FETCH_ERROR,
//                     error: err
//                 }))
//             }
//         })
//         // .then(window.location.reload())
//         .catch(err => dispatch({
//             type: types.FETCH_ERROR,
//             error: err
//         }))
//     }
// }

// export const addNote = (note) => {
//     const request = axios.post('https://killer-notes.herokuapp.com/note/create', note)
//     return (dispatch) => {
//         request.then(res => {
//             if (res.data.success) {
//                 axios.get('https://killer-notes.herokuapp.com/note/get/all')
//                 .then(res2 => dispatch({
//                     type: types.ADD_NOTE,
//                     payload: res2.data
//                 }))
//                 .catch(err => dispatch({
//                     type: types.FETCH_ERROR,
//                     error: err
//                 }))
//             }
//         })
//         .catch(err => dispatch({
//             type: types.FETCH_ERROR,
//             error: err
//         }))
//     }
// }

// export const updateNote = (id, note) => {
//     const request = axios.put(`https://killer-notes.herokuapp.com/note/edit/${id}`, note)
//     return (dispatch) => {
//         request.then(res => dispatch({
//             type: types.UPDATE_NOTE,
//             payload: res.data
//         }))
//         .catch(err => dispatch({
//             type: types.FETCH_ERROR,
//             error: err
//         }))
//     }
// }