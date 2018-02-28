import { CREATE_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {title: 'Note1 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note2 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note3 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note4 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note5 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note6 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note7 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
    {title: 'Note8 title', content: 'aksdlfjalsdjflkasjfl kslkdfjlks'},
  ],
}

export default (state=initialState, action) => {
  switch(action.type) {
    case CREATE_NOTE:
      return Object.assign({}, {
        notes: [...state.notes, action.payload]
      });
    case DELETE_NOTE:
      state.notes.splice(action.payload, 1);
      return Object.assign({}, {
        notes: [...state.notes]
      });
      case EDIT_NOTE:
      state.notes[action.id] = action.payload;
      return Object.assign({}, {
        notes: [...state.notes]
      })
    default:
      return state;
  }
}