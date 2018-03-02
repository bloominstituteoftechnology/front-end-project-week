export const initialTestState = {
      notes: [
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI45FO7160593922030378',
          dateCreated: '2/1/2018, 4:23:07 PM',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1634605157006821',
          dateCreated: '3/1/2017, 2:33:07 PM',

        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'J34543I453464663542030378',
          dateCreated: '1/1/2018, 4:00:07 AM',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1632305157006821',
          dateCreated: '3/1/2018, 2:33:07 PM',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI4534647540378',
          dateCreated: '1/1/2018, 4:23:07 PM',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME1346157006821',
          dateCreated: '2/20/2018, 4:13:07 PM',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'J34543I45566322030378',
          dateCreated: '3/1/2018, 1:32:07 PM',
        },
        {
          title: 'Note Title',
          entry: 'Autem inventore quisquam est quia rerum quaerat rem ratione ea. Quo ut beatae nisi eligendi minima sed non eaque et. Similique inventore suscipit quas delectus omnis est qui. Beatae corrupti sequi. Praesentium ipsa et rem quis excepturi earum.',
          id: 'FDH352ME16234343442006821',
          dateCreated: '3/1/2018, 4:33:10 PM',
        },
        {
          title: 'Note Title',
          entry: 'Sit totam a et omnis officia. Laboriosam sed quos dicta. Sunt deleniti occaecati blanditiis animi nihil reiciendis. Aut incidunt aut atque omnis nam quam occaecati corrupti saepe. Nostrum ex quis. Ut voluptatem at omnis et. Molestias a id eos porro voluptas qui ipsum perferendis. Sed provident consequatur facere. Sed quidem tenetur esse aut ut. Sunt quam hic. Magnam aut nobis. Suscipit nulla quos a in voluptas minus qui qui sit. Saepe fugiat quidem cupiditate ullam quidem sunt est.',
          id: 'JNEI45346476570378',
          dateCreated: '3/1/2018, 2:22:07 PM',
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

    case 'SORT_NOTES':
      return { ...state, notes: action.payload, sorted: action.sorted };

    default:
      return state;
  }
}

export default notesReducer;