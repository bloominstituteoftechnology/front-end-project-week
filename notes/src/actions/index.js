
import axios from 'axios';
export const ADD_NOTE = 'ADD_NOTE';

export const addNote = (note) => {
  return {
    type: ADD_NOTE,
    payload: note
  }
};

// export const fetchLuke = () => {
//   // * using axios * to make api request
//   const request = axios.get('https://swapi.co/api/people/1');
//   // * redux thunk * can return a function for async fetching
//   return dispatch => {
//     // before the data is fetched, dispatch action to turn loading to true
//     dispatch({ type: FETCHING_LUKE });
//     // after the data is fetched
//     // set time out to simulates a longer delay on api request
//     setTimeout(()=>{
//        request
//       .then((res) => {
//         // dispatch action
//         dispatch({ type: FETCHED_LUKE, payload: res.data });
//       })
//       .catch((err) => {
//         console.log('ERROR!', err);
//       });
//     }, 2000); 
//   };
// };