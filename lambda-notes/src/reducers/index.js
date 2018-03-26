import { ADD_NOTE } from '../actions'

const initialState = [
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 1,
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 2,
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 3,
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 4,
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 5,
  },
  {
    title: "Note Title",
    text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.",
    id: 6,
  },
]

export const noteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTE:
      return [
        ...state,
        {
          id: action.id,
          title: action.title,
          text: action.text,
        }
      ]
    default:
      return state; 
  }
}

export default noteReducer;