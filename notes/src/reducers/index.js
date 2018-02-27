const initialTestState = {
      notes: [
        {
          title: 'National',
          entry: 'Quasi ut accusamus rem.',
          id: 'FDH352',
        },
        {
          title: 'Investor',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
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

    case 'EDIT_NOTE':
      return { ...state, notes: state.notes.map(note => {
        if (note.id === action.payload.id) {
          return action.payload;
        }
        return note;
      })};

    case 'DELETE_NOTE':
      return { ...state, notes: state.notes.filter(note => note.id !== action.payload) };

    default:
      return state;
  }
}

export default notesReducer;