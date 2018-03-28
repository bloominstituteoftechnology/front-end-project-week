import { ADD_NOTE, UPDATE_NOTE } from '../actions'

const initialState = [
  {
    title: "Note Title 1",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 1,
  },
  {
    title: "Note Title 2",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 2,
  },
  {
    title: "Note Title 3",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 3,
  },
  {
    title: "Note Title 4",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 4,
  },
  {
    title: "Note Title 5",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 5,
  },
  {
    title: "Note Title 6",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 6,
  },
]

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [...state.id,
        {
          title: action.title,
          text: action.text,
          id: action.id,
        }
      ];
    case UPDATE_NOTE:
    return {
      ...state,
      notes: state.notes.map((note) => {
        if (note.id.toString() === action.id) {
          return {
            id: Number(action.id),
            title: action.title,
            text: action.text,
          };
        } return note;
      }),
    };
    default:
      return state; 
  }
}

export default noteReducer;