import { ADD_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
    {
      id: 1,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
    {
      id: 2,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
    {
      id: 3,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
    {
      id: 4,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
    {
      id: 5,
      title: 'Have fun',
      body:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc lacinia accumsan ligula, ac interdum elit ornare ac.',
    },
  ],
  counter: 6,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      console.log('action.payload.title: ', action.payload.title);
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            body: action.payload.body,
            id: (action.payload.id = state.counter),
          },
        ],
        counter: ++state.counter,
      };
    default:
      return state;
  }
};

export default reducer;
