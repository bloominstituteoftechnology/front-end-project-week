// import { DELETE_NOTE } from '../actions/DeleteAction';
import { LOAD_NOTES, LOADED_NOTES } from '../actions/GetActions';
import { ADD_NOTES, ADDED_NOTES } from '../actions/NoteActions';

// import noteData from '../noteData';
// const initialState = {
//   notes: [],
//   addNotes: false,
//   loadNotes: false
// };

export default (notes = [], action) => {
  switch (action.type) {
    case ADDED_NOTES:
      return [...notes, action.notes];
    case LOADED_NOTES:
      return [...notes, action.notes];
    default:
      return notes;
  }
};

// export default noteReducer;

//|||||||||||||||||||||||||||||||||\\
// OLD CODE FOR FRONT END
//|||||||||||||||||||||||||||||||||\\
// return {
//   ...state,
//   notes: [
//     ...state.notes,
//     {
//       id: action.payload.id,
//       title: action.payload.title,
//       text: action.payload.text
//     }
//   ]
// };
// case DELETE_NOTE:
//   return {
//     ...state,
//     notes: state.notes.filter(note => {
//       return note.id !== action.payload;
//     })
//   };
