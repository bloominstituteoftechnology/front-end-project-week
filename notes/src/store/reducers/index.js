import {ADDING_NOTE} from '../actions';
const initialState = {
  notes: [
    {
      tags: ['tag', 'otherTag'],
      title: 'Test Note One',
      textBody: 'This is a test note!',
      id: 0,
    },
    {
      tags: ['tag', 'otherTag'],
      title: 'Test Note Two',
      textBody: 'This is another test note!',
      id: 1,
    },
  ],
};

let id = 2;

export default (state = initialState, action) => {
  switch (action.type) {
    case ADDING_NOTE:
      console.log('adding note reducer');
      return {
        ...state,
        notes: state.notes.concat({...action.payload, id: id++}),
      };

    default:
      return state;
  }
};
