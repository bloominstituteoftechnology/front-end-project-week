import testData from '../components/TestData';
import { EDIT_NOTE, CREATE_NOTE, DELETE_NOTE } from '../actions';

const initialState = {
  notes: testData,
}

export default (state = initialState, action) => {
  switch (action.type) {

    // ------ EDIT NOTE ------
    case EDIT_NOTE:
      return Object.assign({}, state, {
        notes: state.notes.map((note, index) => {
          if(index === action.index) {
            return Object.assign({}, note, {
              title: action.payload.title,
              text: action.payload.text,
            })
          }
          return note;
        })
      });

    // ------ CREATE NOTE ------
    case CREATE_NOTE:
      return Object.assign({}, state, {
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            text: action.payload.text,
          }
        ]
      });
    
    // ------ DELETE NOTE ------
    case DELETE_NOTE:
      return state;
    
    // ------ DEFAULT CASE ------
    default:
      return state;
  }
};
