import { ADD_NOTE, EDIT_NOTE, DELETE_NOTE } from '../actions';


export const initialState = {
  notes: [
    {
      id: 1,
      title: 'Hello Note',
      description: 'This is the description of the note that I am going to make'
    },
    {
      id: 2,
      title: 'Hello Noteeee',
      description: 'This is the description of the note that I am going to make'
    },
  ]
}


export const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case DELETE_NOTE:
      console.log(action.payload);
    break;
    default:
      return state;
  }
}
