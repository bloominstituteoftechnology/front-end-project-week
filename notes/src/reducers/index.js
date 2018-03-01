const initialTestState = {
      notes: [
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI45FO7160593922030378',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1634605157006821',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'J34543I453464663542030378',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1632305157006821',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI4534647540378',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1346157006821',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'J34543I45566322030378',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME16234343442006821',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI45346476570378',
        },
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

    case 'REORDER_NOTES':
      if ( action.searching ) {
        return { ...state, searchResults: action.payload };
      }
      return { ...state, notes: action.payload };

    case 'SEARCH_NOTES':
      return { ...state, searchResults: action.payload, searchTerms: action.searchTerms };

    default:
      return state;
  }
}

export default notesReducer;