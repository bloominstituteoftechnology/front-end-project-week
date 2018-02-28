import { GET_NOTES, ADD_NOTE, DELETE_NOTE, EDIT_NOTE } from '../actions';

const initialState = {
  notes: [
    {
      id: 0,
      title: 'Vivamus',
      content:
        "Curabitur aliquam massa eu justo placerat, quis gravida arcu consequat. Morbi porttitor mattis nulla non posuere. Duis est felis, rutrum non efficitur id, euismod a ipsum. Phasellus a urna gravida, hendrerit dolor eget, commodo metus. Ut eget semper lorem. Donec arcu elit, eleifend vitae massa ut, tincidunt pellentesque sapien. Nunc sed fermentum sapien. Curabitur id magna posuere, efficitur velit in, placerat justo. Maecenas consectetur tristique purus in ultrices. Fusce ultricies hendrerit interdum. Cras sollicitudin tincidunt efficitur. Maecenas in eleifend urna. Suspendisse porta et massa non fringilla. Donec ut enim ut ligula bibendum convallis. Integer eget faucibus lorem.\n\nUt sit amet urna malesuada, lacinia dolor scelerisque, sagittis erat. Sed id augue quam. Fusce ex enim, ullamcorper at dui non, tristique varius risus. Donec efficitur dapibus varius. Maecenas non lorem quis velit congue ultrices. Nulla ac facilisis purus. Morbi vitae sagittis risus. Sed elementum metus nec est maximus vestibulum.",
    },
  ],
  counter: 6,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_NOTES:
      return {
        ...state,
        notes: action.payload,
        counter: ++state.counter,
      };
    case ADD_NOTE:
      return {
        ...state,
        notes: [
          ...state.notes,
          {
            title: action.payload.title,
            content: action.payload.content,
            id: state.counter,
          },
        ],
        counter: ++state.counter,
      };
    case DELETE_NOTE:
      return {
        ...state,
        notes: state.notes.filter(each => {
          return each.id !== action.payload;
        }),
      };
    case EDIT_NOTE:
      let newNotes = state.notes.map(each => {
        if (each.id === action.id) {
          if (action.payload.title === '') action.payload.title = each.title;
          if (action.payload.content === '') action.payload.content = each.content;
          return {
            title: action.payload.title,
            content: action.payload.content,
            id: action.id,
          };
        }
        return each;
      });

      return {
        ...state,
        notes: newNotes,
      };
    default:
      return state;
  }
};

export default reducer;
