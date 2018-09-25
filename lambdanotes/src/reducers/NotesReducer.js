// import { ADD_NOTES, TOGGLE_NOTES, REMOVE_NOTES, GET_NOTES } from '../actions';

// const initialState = {
//   notes: [
//     {
//       id:Math.random(),
//       title: 'Note title',
//       text: 'hello asdasd asdasd asd asd asd asd as hello asdasd asdasd asd asd asd asd as ',
//     },
//     {
//       id:Math.random(),
//       title: 'Note title',
//       text: 'hello asdasd asdasd asd asd asd asd as hello asdasd asdasd asd asd asd asd as ',
//     }
//   ]
// };

// export const notesReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case ADD_NOTES:
//       return { ...state, notes: [...state.notes, action.payload] };
//     default:
//       return state;
//   }
// };

/*
  Be sure to import in all of the action types from `../actions`
*/
import {
  NOTE_FETCHING_DATA,
  NOTE_DATA_FETCHED,
  NOTE_FETCH_ERROR,
  
  INITIALIZE_NOTE_ADD,
  COMPLETE_NOTE_ADD,
  ADD_NOTE_ERROR,
} from '../actions';

 const initialState = {
  notes: [],
  fetchingData: false,
  dataFetched: false,
  addingNote: false,
  error: '',
};
 export const notesReducer = (state = initialState, action) => {
  switch (action.type) {
    case NOTE_FETCHING_DATA:
      return { ...state, fetchingData: true };

    case NOTE_DATA_FETCHED:
      return { ...state, notes: action.payload,fetchingData: false,dataFetched: true,};

    case NOTE_FETCH_ERROR:
      return { ...state, error: 'Error fetching data',};

    case INITIALIZE_NOTE_ADD:
      return {...state, addingNote: true,};

    case COMPLETE_NOTE_ADD:
      return { ...state, addingNote: false, note: action.payload, };

    case ADD_NOTE_ERROR:
      return { ...state, error: 'Error adding note',addingNote: false,};

    default:
      return state;
  }
  
}; 