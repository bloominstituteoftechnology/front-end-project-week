const initialTestState = {
      notes: [
        {
          title: 'National',
          entry: 'Quasi ut accusamus rem.',
          id: 'FDH352',
        },
        {
          title: 'Investor',
          entry: 'Sint rerum vero incidunt aperiam consectetur consequatur ullam in distinctio.',
          id: 'JNEI45',
        }
      ],
    };

const notesReducer = (state = initialTestState, action) => {
  switch (action.type) {

    case 'ADD_NOTE':
      return { ...state, notes: state.notes.concat(action.payload)};

    case 'VIEW_NOTE':
      return { ...state, current: action.payload };

    default:
      return state;
  }
}

export default notesReducer;